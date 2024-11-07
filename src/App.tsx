import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "./styles/Theme";
import { SurveyProvider } from "./context/SurveyProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <SurveyProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
        <ToastContainer />
      </ThemeProvider>
    </SurveyProvider>
  );
}

export default App;
