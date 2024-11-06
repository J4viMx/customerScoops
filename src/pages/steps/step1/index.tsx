import { useRef } from "react";
import { Banner } from "../../../components/banner/Banner";
import { LogoDesktop } from "../../../components/logoDesktop/LogoDesktop";
import { NavigationButtons } from "../../../components/NavigationButtons/NavigationButtons";
import {
  ContainerMain,
  ContainerText,
  FirstItem,
  ProgressBar,
  SecondItem,
} from "../../../components/styles/container/Container.styled";
import { StyledInput } from "../../../components/styles/input/Input.styled";
import {
  StyledParagraph,
  StyledParagraphQuestion,
  StyledSpan,
} from "../../../components/styles/text/Text.styled";
import { useSurvey } from "../../../hooks/useSurvey";

const Step1 = () => {
  const { state, dispatch } = useSurvey();
  const step = useRef("01");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_RESPONSE",
      payload: { step: step.current, response: event.target.value },
    });
  };

  return (
    <ContainerMain>
      <ProgressBar $progress="16%" />
      <FirstItem>
        <Banner pageNumber={"01"} />
      </FirstItem>
      <SecondItem>
        <ContainerText>
          <LogoDesktop />
          <StyledParagraph>
            Muchas gracias por tu interés en conocer{" "}
            <StyledSpan>customerScoops,</StyledSpan> que a través de Formularios
            Conversacionales Inteligente te ayudamos a aumentar el revenue y
            rentabilidad de tu negocio.
          </StyledParagraph>
          <StyledParagraphQuestion $spacing>
            Queremos conocerte, ¿cuál es tu nombre?
          </StyledParagraphQuestion>
          <StyledInput
            placeholder="Nombre"
            type="text"
            value={state[step.current] ?? ""}
            onChange={handleInputChange}
          />
          <NavigationButtons
            text={"Comenzar"}
            isFirstORLastPage
            nextPage={"/step-2"}
          />
        </ContainerText>
      </SecondItem>
    </ContainerMain>
  );
};

export default Step1;
