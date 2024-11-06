import { Banner } from "../../../components/banner/Banner";
import { LogoDesktop } from "../../../components/logoDesktop/LogoDesktop";
import { NavigationButtons } from "../../../components/NavigationButtons/NavigationButtons";
import { OptionsComponent } from "../../../components/options/OptionsComponent";
import {
  ContainerMain,
  ContainerText,
  FirstItem,
  ProgressBar,
  SecondItem,
} from "../../../components/styles/container/Container.styled";
import {
  StyledParagraphQuestion,
  StyledTextSubtitle,
} from "../../../components/styles/text/Text.styled";

enum options {
  "Tecnología" = "Tecnología",
  "Software" = "Software",
  "Servicios" = "Servicios",
  "Financiera" = "Financiera",
  "Telecomunicaciones" = "Telecomunicaciones",
  "Producción / Fabricación" = "Producción Fabricación",
  "Logística" = "Logística",
  "Consumo Masivo" = "Consumo Masivo",
  "Mayorista" = "Mayorista",
  "Retail" = "Retail",
  "Otra" = "Otra",
}

const Step5 = () => {
  return (
    <ContainerMain>
      <ProgressBar progress="80%" />
      <FirstItem>
        <Banner pageNumber={"05"} />
      </FirstItem>
      <SecondItem>
        <ContainerText>
          <LogoDesktop />
          <StyledTextSubtitle>
            Ahora te vamos a sorprender...
          </StyledTextSubtitle>
          <StyledParagraphQuestion>
            ¿A cuál industria pertenece tu empresa?
          </StyledParagraphQuestion>
          <OptionsComponent options={Object.values(options)} columns="2" />
          <NavigationButtons
            text={"Siguiente"}
            isFirstORLastPage={false}
            nextPage="/step-6"
            previousPage="/step-5"
          />
        </ContainerText>
      </SecondItem>
    </ContainerMain>
  );
};

export default Step5;
