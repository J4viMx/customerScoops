import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";
import { SurveyProvider } from "./context/SurveyProvider";

function App() {
  return (
    <SurveyProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </SurveyProvider>
  );
}

export default App;
