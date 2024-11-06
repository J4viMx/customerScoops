import { useRef } from "react";
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
import { useSurvey } from "../../../hooks/useSurvey";

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
  const { state, dispatch } = useSurvey();
  const step = useRef("02");

  const handleClick = (value: string) => {
    dispatch({
      type: "SET_RESPONSE",
      payload: { step: step.current, response: value },
    });
  };
  return (
    <ContainerMain>
      <ProgressBar $progress="80%" />
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
          <OptionsComponent
            selected={state[step.current]}
            options={Object.values(options)}
            columns="2"
            handleClick={handleClick}
          />
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
