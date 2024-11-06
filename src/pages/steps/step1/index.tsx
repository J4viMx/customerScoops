import { Banner } from "../../../components/bannerMobile/Banner";
import { NavigationButtons } from "../../../components/NavigationButtons/NavigationButtons";
import { ContainerText } from "../../../components/styles/container/Container.styled";
import { StyledInput } from "../../../components/styles/input/Input.styled";
import {
  StyledParagraph,
  StyledParagraphQuestion,
  StyledSpan,
} from "../../../components/styles/text/Text.styled";

const Step1 = () => {
  return (
    <div>
      <Banner pageNumber={"01"} />
      <ContainerText>
        <StyledParagraph>
          Muchas gracias por tu interés en conocer{" "}
          <StyledSpan>customerScoops,</StyledSpan> que a través de Formularios
          Conversacionales Inteligente te ayudamos a aumentar el revenue y
          rentabilidad de tu negocio.
        </StyledParagraph>
        <StyledParagraphQuestion spacing>
          Queremos conocerte, ¿cuál es tu nombre?
        </StyledParagraphQuestion>
        <StyledInput placeholder="Nombre" />
        <NavigationButtons
          text={"Comenzar"}
          isFirstORLastPage
          nextPage={"/step-2"}
        />
      </ContainerText>
    </div>
  );
};

export default Step1;
