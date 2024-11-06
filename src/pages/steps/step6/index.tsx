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
import {
  StyledParagraph,
  StyledTextItalic,
  StyledTextTitle,
} from "../../../components/styles/text/Text.styled";

const Step6 = () => {
  return (
    <ContainerMain isLastStep>
      <ProgressBar progress="100%" />
      <FirstItem>
        <Banner pageNumber={"06"} />
      </FirstItem>
      <SecondItem>
        <ContainerText>
          <LogoDesktop />
          <StyledTextTitle>Muchas Gracias</StyledTextTitle>
          <StyledParagraph isLastStep>
            por querer ser parte de la familia Scoopers.
          </StyledParagraph>

          <StyledTextItalic>Nos vemos pronto!</StyledTextItalic>
          <NavigationButtons
            text={"Finalizar"}
            isFirstORLastPage
            nextPage="https://www.customerscoops.com/"
          />
        </ContainerText>
      </SecondItem>
    </ContainerMain>
  );
};

export default Step6;
