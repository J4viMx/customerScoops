import { Banner } from "../../components/banner/Banner";
import { ButtonNextStep } from "../../components/button/ButtonNextStep";
import { ButtonPreviousStep } from "../../components/button/ButtonPreviousStep";
import { ButtonWithLetter } from "../../components/button/ButtonWithLetter";
import { Option } from "../../components/button/Option";
import { StyledInput } from "../../components/styles/input/Input.styled";
import { StyledTextItalic } from "../../components/styles/text/Text.styled";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Banner />
      <ButtonNextStep />
      <ButtonPreviousStep />
      <Option text={"Board member"} />
      <ButtonWithLetter
        text="Aumentar Conversion de leads a clientes"
        letter="A"
      />
      <StyledInput placeholder="Nombre" />
      <StyledTextItalic>Texto</StyledTextItalic>
    </div>
  );
};

export default Home;
