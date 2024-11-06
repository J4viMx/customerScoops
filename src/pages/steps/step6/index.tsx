import { Banner } from "../../../components/bannerMobile/Banner";
import { NavigationButtons } from "../../../components/NavigationButtons/NavigationButtons";
import { ContainerText } from "../../../components/styles/container/Container.styled";
import {
  StyledParagraph,
  StyledTextItalic,
  StyledTextTitle,
} from "../../../components/styles/text/Text.styled";

const Step6 = () => {
  return (
    <div>
      <Banner pageNumber={"06"} />
      <ContainerText>
        <StyledTextTitle>Muchas Gracias</StyledTextTitle>
        <StyledParagraph>
          por querer ser parte de la familia Scoopers.
        </StyledParagraph>

        <StyledTextItalic>Nos vemos pronto!</StyledTextItalic>
        <NavigationButtons
          text={"Finalizar"}
          isFirstORLastPage
          nextPage="https://www.customerscoops.com/"
        />
      </ContainerText>
    </div>
  );
};

export default Step6;
