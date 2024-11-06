import { StyledOptionSelector } from "../styles/button/Button.styled";
import { StyledParagraphCentered } from "../styles/text/Text.styled";

interface Props {
  text: string;
  selected?: boolean;
}

/* TODO: Si se ocupa? */
export const Option = ({ text, selected }: Props) => {
  return (
    <StyledOptionSelector selected={selected}>
      <StyledParagraphCentered>{text}</StyledParagraphCentered>
    </StyledOptionSelector>
  );
};
