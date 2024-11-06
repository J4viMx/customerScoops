import { createContext, Dispatch } from "react";
import { SurveyAction, SurveyState } from "./types";

interface SurveyContextProps {
  state: SurveyState;
  dispatch: Dispatch<SurveyAction>;
}
export const SurveyContext = createContext<SurveyContextProps | undefined>(
  undefined
);
