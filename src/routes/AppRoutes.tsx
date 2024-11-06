import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Step1 from "../pages/steps/step1";
import Step2 from "../pages/steps/step2";
import Step3 from "../pages/steps/step3";
import Step4 from "../pages/steps/step4";
import Step5 from "../pages/steps/step5";
import Step6 from "../pages/steps/step6";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step-2" element={<Step2 />} />
        <Route path="/step-3" element={<Step3 />} />
        <Route path="/step-4" element={<Step4 />} />
        <Route path="/step-5" element={<Step5 />} />
        <Route path="/step-6" element={<Step6 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
