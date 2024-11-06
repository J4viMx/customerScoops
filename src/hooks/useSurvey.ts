import { useContext } from "react";
import { SurveyContext } from "../context/SurveyContext";

export const useSurvey = () => {
  const context = useContext(SurveyContext);

  if (!context) {
    throw new Error("useSurvey debe ser usado dentro de un SurveyProvider");
  }

  return context;
};
