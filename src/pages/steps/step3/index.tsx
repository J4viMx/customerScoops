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
import { StyledParagraphQuestion } from "../../../components/styles/text/Text.styled";

enum options {
  "Aumentar conversión de leads a clientes" = "Aumentar conversión de leads a clientes",
  "Reducir cutomer churn" = "Reducir cutomer churn",
  "Implementar un programa VoC" = "Implementar un programa VoC",
  "Reducir costos en gestión de reclamos" = "Reducir costos en gestión de reclamos",
  "Optimizar procesos comerciales" = "Optimizar procesos comerciales",
  "Optimizar procesos Operativos" = "Optimizar procesos Operativos",
  "Otro" = "Otro",
}

const Step3 = () => {
  return (
    <ContainerMain>
      <ProgressBar progress="50%" />
      <FirstItem>
        <Banner pageNumber={"03"} />
      </FirstItem>
      <SecondItem>
        <ContainerText>
          <LogoDesktop />
          <StyledParagraphQuestion spacing>
            ¿Cuáles son tus principales desafíos para 2024?
          </StyledParagraphQuestion>
          <OptionsComponent
            options={Object.values(options)}
            columns="1"
            isSpecialSelector
          />
          <NavigationButtons
            text={"Siguiente"}
            isFirstORLastPage={false}
            nextPage="/step-4"
            previousPage="/step-2"
          />
        </ContainerText>
      </SecondItem>
    </ContainerMain>
  );
};

export default Step3;
