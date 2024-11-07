import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loadable from "../components/Loader/Loadable";
import SurveyGuard from "../components/Guard/SurveyGuard";

const Step1 = Loadable(lazy(() => import("../pages/steps/step1")));
const Step2 = Loadable(lazy(() => import("../pages/steps/step2")));
const Step3 = Loadable(lazy(() => import("../pages/steps/step3")));
const Step4 = Loadable(lazy(() => import("../pages/steps/step4")));
const Step5 = Loadable(lazy(() => import("../pages/steps/step5")));
const Step6 = Loadable(lazy(() => import("../pages/steps/step6")));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <SurveyGuard>
        <Routes>
          <Route path="/" element={<Navigate to={"/step-1"} />} />
          <Route path="/step-1" element={<Step1 />} />
          <Route path="/step-2" element={<Step2 />} />
          <Route path="/step-3" element={<Step3 />} />
          <Route path="/step-4" element={<Step4 />} />
          <Route path="/step-5" element={<Step5 />} />
          <Route path="/step-6" element={<Step6 />} />
          <Route path="/*" element={<Navigate to={"/step-1"} />} />
        </Routes>
      </SurveyGuard>
    </Router>
  );
};

export default AppRoutes;
