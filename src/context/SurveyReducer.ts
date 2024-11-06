import { SurveyState } from "./types";

type SurveyAction =
  | {
      type: "SET_RESPONSE";
      payload: { step: string; response: string | number | null };
    }
  | { type: "RESET_SURVEY" };

export const surveyReducer = (
  state: SurveyState,
  action: SurveyAction
): SurveyState => {
  switch (action.type) {
    case "SET_RESPONSE":
      return {
        ...state,
        [action.payload.step]: action.payload.response,
      };
    case "RESET_SURVEY":
      return {};
    default:
      return state;
  }
};
