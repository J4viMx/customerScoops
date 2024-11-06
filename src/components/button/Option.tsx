import { StyledOptionSelector } from "../styles/button/Button.styled";
import { StyledParagraph } from "../styles/text/Text.styled";

interface Props {
  text: string;
  selected?: boolean;
}

export const Option = ({ text, selected }: Props) => {
  return (
    <StyledOptionSelector selected={selected}>
      <StyledParagraph>{text}</StyledParagraph>
    </StyledOptionSelector>
  );
};
