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
import { StyledParagraphQuestion } from "../../../components/styles/text/Text.styled";
import { useSurvey } from "../../../hooks/useSurvey";

enum options {
  "SAP" = "SAP",
  "Microsoft Dynamics" = "Microsoft Dynamics",
  "Salesforce" = "Salesforce",
  "Hubspot" = "Hubspot",
  "Zoho" = "Zoho",
  "Netsuite (Oracle)" = "Netsuite (Oracle)",
  "Monday" = "Monday",
  "CRM Propio" = "CRM Propio",
  "No tengo CRM" = "No tengo CRM",
}

const Step4 = () => {
  const { state, dispatch } = useSurvey();
  const step = useRef("step-4");

  const handleClick = (value: string) => {
    dispatch({
      type: "SET_RESPONSE",
      payload: { step: step.current, response: value },
    });
  };
  return (
    <ContainerMain>
      <ProgressBar $progress="64%" />
      <FirstItem>
        <Banner pageNumber={"04"} />
      </FirstItem>
      <SecondItem>
        <ContainerText>
          <LogoDesktop />
          <StyledParagraphQuestion $spacing>
            ¿Cuál CRM están utilizando en tu empresa? <br /> CRM:
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
            nextPage="/step-5"
            previousPage="/step-3"
          />
        </ContainerText>
      </SecondItem>
    </ContainerMain>
  );
};

export default Step4;
