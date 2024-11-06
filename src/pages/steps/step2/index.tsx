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
  StyledParagraph,
  StyledParagraphQuestion,
  StyledSpan,
} from "../../../components/styles/text/Text.styled";
import { useSurvey } from "../../../hooks/useSurvey";

enum options {
  "Board member" = "Board member",
  "C-level" = "C-level",
  "Gerente" = "Gerente",
  "Subgerente" = "Subgerente",
  "Jefe área" = "Jefe área",
  "Lider de área" = "Lider de área",
  "Ejecutivo / Analista" = "Ejecutivo / Analista",
  "Otro" = "Otro",
}

const Step2 = () => {
  const { state, dispatch } = useSurvey();
  const step = useRef("step-2");

  const handleClick = (value: string) => {
    dispatch({
      type: "SET_RESPONSE",
      payload: { step: step.current, response: value },
    });
  };
  return (
    <ContainerMain>
      <ProgressBar $progress="32%" />
      <FirstItem>
        <Banner pageNumber={"02"} />
      </FirstItem>

      <SecondItem>
        <ContainerText>
          <LogoDesktop />
          <StyledParagraph>
            <StyledSpan>Genial {state["01"]}, </StyledSpan>
            ahora nos gustaría tener cierta info para diseñar una gran propuesta
            de valor para ti:
          </StyledParagraph>
          <StyledParagraphQuestion $spacing>
            ¿Cuál es tu cargo/posición dentro de tu empresa?
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
            nextPage="/step-3"
            previousPage="/"
          />
        </ContainerText>
      </SecondItem>
    </ContainerMain>
  );
};

export default Step2;
