import { Banner } from "../../../components/bannerMobile/Banner";
import { NavigationButtons } from "../../../components/NavigationButtons/NavigationButtons";
import { OptionsComponent } from "../../../components/options/OptionsComponent";
import { ContainerText } from "../../../components/styles/container/Container.styled";
import { StyledParagraphQuestion } from "../../../components/styles/text/Text.styled";

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
  return (
    <div>
      <Banner pageNumber={"04"} />
      <ContainerText>
        <StyledParagraphQuestion spacing>
          ¿Cuál CRM están utilizando en tu empresa? <br /> CRM:
        </StyledParagraphQuestion>
        <OptionsComponent options={Object.values(options)} columns="2" />
        <NavigationButtons
          text={"Siguiente"}
          isFirstORLastPage={false}
          nextPage="/step-5"
          previousPage="/step-4"
        />
      </ContainerText>
    </div>
  );
};

export default Step4;