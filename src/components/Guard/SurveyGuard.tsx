import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SurveyGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedState = localStorage.getItem("surveyState");
    if (storedState) {
      const surveyState = JSON.parse(storedState);
      const steps = Object.keys(surveyState);

      if (steps.length > 0) {
        const lastStep = steps[steps.length - 1];
        navigate(`/${lastStep}`);
        return;
      }
      navigate(`/step-1`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default SurveyGuard;
