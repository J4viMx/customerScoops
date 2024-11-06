import {
  StyledOptionLetter,
  StyledOptionSelector,
} from "../styles/button/Button.styled";
import { StyledParagraph } from "../styles/text/Text.styled";

interface Props {
  text: string;
  letter: string;
  selected?: boolean;
}

export const ButtonWithLetter = ({ text, selected, letter }: Props) => {
  return (
    <StyledOptionSelector selected={selected}>
      <StyledOptionLetter>{letter}</StyledOptionLetter>
      <StyledParagraph>{text}</StyledParagraph>
    </StyledOptionSelector>
  );
};
