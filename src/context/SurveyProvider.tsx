import { useReducer, ReactNode } from "react";
import { SurveyContext } from "./SurveyContext";
import { surveyReducer } from "./SurveyReducer";
import { SurveyState } from "./types";

const initialState: SurveyState = {};

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(surveyReducer, initialState);

  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
};
