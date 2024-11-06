import { Banner } from "../../../components/bannerMobile/Banner";
import { NavigationButtons } from "../../../components/NavigationButtons/NavigationButtons";
import { OptionsComponent } from "../../../components/options/OptionsComponent";
import { ContainerText } from "../../../components/styles/container/Container.styled";
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
    <div>
      <Banner pageNumber={"05"} />
      <ContainerText>
        <StyledTextSubtitle>Ahora te vamos a sorprender...</StyledTextSubtitle>
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
    </div>
  );
};

export default Step5;
