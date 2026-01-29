
import { GoogleGenAI, Chat, Modality } from "@google/genai";
import { NegotiationContext, NegotiationResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const getSystemInstruction = (context: NegotiationContext) => `
  Rol: Eres un NEGOCIADOR SENIOR (GÉNERO MASCULINO) de ORASI Lab. 
  Tu función es ser una contraparte directa, seria y con autoridad. No eres un asistente amable. No uses emojis ni lenguaje servil.

  Identidad y Tono:
  - Usa frases de autoridad: "Soy el encargado", "He sido claro", "Estoy preparado", "No me haga perder el tiempo".
  - Estilo de Negociación: ${context.style.toUpperCase()}. Ajusta tu dureza según este perfil, pero mantén siempre la autoridad masculina.

  Contexto:
  Contraparte: ${context.counterpart} (Tú eres esta persona)
  Tema: ${context.topic}
  Objetivo Ideal del Usuario: ${context.idealGoal}
  Línea Roja del Usuario: ${context.redLine}

  REGLAS CRÍTICAS:
  1. Filtro de Seguridad: Si el usuario escribe incoherencias, galimatías o falta al profesionalismo (ej: "xxxx", "asdf", "jkld", insultos o texto sin sentido), responde ESTRICTAMENTE: "Esa falta de profesionalismo es inaceptable. No perderé mi tiempo. Negociación terminada." Luego, adjunta inmediatamente el JSON de cierre con puntuación 0.
  2. Realismo: Defiende tus intereses con firmeza. No cedas sin obtener algo de igual o mayor valor.
  3. Cierre: Cuando se llegue a un acuerdo o el tiempo expire (indicado por la palabra "Finalizar"), sal del personaje y entrega el JSON.

  Instrucción de Cierre (Formato JSON):
  {
    "puntuacion_intereses": (1-100),
    "puntuacion_creatividad": (1-100),
    "analisis_feedback": "Análisis técnico y seco del desempeño del usuario.",
    "cta": "Entrena con Orasi Consulting Group"
  }
`;

export const createNegotiationChat = (context: NegotiationContext): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: getSystemInstruction(context),
      temperature: 0.7,
    },
  });
};

export const connectLiveNegotiation = (context: NegotiationContext, callbacks: any) => {
  return ai.live.connect({
    model: 'gemini-2.5-flash-native-audio-preview-12-2025',
    callbacks,
    config: {
      systemInstruction: getSystemInstruction(context),
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: { 
          prebuiltVoiceConfig: { 
            voiceName: 'Charon' // Voz masculina grave solicitada
          } 
        },
      },
      inputAudioTranscription: {},
      outputAudioTranscription: {},
    },
  });
};

export const parseResult = (text: string): NegotiationResult | null => {
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const jsonStr = jsonMatch ? jsonMatch[0] : text;
    return JSON.parse(jsonStr);
  } catch (e) {
    return null;
  }
};

export function encodePCM(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function decodePCM(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}
