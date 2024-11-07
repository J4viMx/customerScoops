export interface Step {
  id: number;
  value: string | number | null;
}

export interface SurveyState {
  [key: string]: string | number | null;
}

export type SurveyAction =
  | {
      type: "SET_RESPONSE";
      payload: { step: string; response: string | number | null };
    }
  | { type: "RESET_SURVEY" };
