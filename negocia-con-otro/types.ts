
export interface NegotiationContext {
  counterpart: string;
  topic: string;
  idealGoal: string;
  redLine: string;
  durationMinutes: number;
  style: 'competitivo' | 'colaborativo' | 'evitativo' | 'acomodaticio';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NegotiationResult {
  puntuacion_intereses: number;
  puntuacion_creatividad: number;
  analisis_feedback: string;
  cta: string;
}

export enum AppStage {
  SETUP = 'SETUP',
  SIMULATION = 'SIMULATION',
  RESULTS = 'RESULTS'
}
