import {
  StyledOptionLetter,
  StyledOptionSelector,
} from "../styles/button/Button.styled";
import { StyledParagraphCentered } from "../styles/text/Text.styled";

interface Props {
  text: string;
  letter: string;
  selected?: boolean;
}

export const ButtonWithLetter = ({ text, selected, letter }: Props) => {
  return (
    <StyledOptionSelector selected={selected}>
      <StyledOptionLetter>{letter}</StyledOptionLetter>
      <StyledParagraphCentered>{text}</StyledParagraphCentered>
    </StyledOptionSelector>
  );
};
