import { useReducer, ReactNode, useEffect } from "react";
import { SurveyContext } from "./SurveyContext";
import { surveyReducer } from "./SurveyReducer";
import { SurveyState } from "./types";

const loadFromLocalStorage = (): SurveyState => {
  const storedState = localStorage.getItem("surveyState");
  return storedState ? JSON.parse(storedState) : {};
};

const initialState: SurveyState = loadFromLocalStorage();

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(surveyReducer, initialState);

  useEffect(() => {
    localStorage.setItem("surveyState", JSON.stringify(state));
  }, [state]);

  return (
    <SurveyContext.Provider value={{ state, dispatch }}>
      {children}
    </SurveyContext.Provider>
  );
};
