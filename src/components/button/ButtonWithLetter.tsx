import {
  StyledOptionLetter,
  StyledOptionSelector,
} from "../styles/button/Button.styled";
import { StyledParagraphCentered } from "../styles/text/Text.styled";

interface Props {
  text: string;
  letter: string;
  selected?: boolean;
  handleClick: () => void;
}

export const ButtonWithLetter = ({
  text,
  selected,
  letter,
  handleClick,
}: Props) => {
  return (
    <StyledOptionSelector onClick={handleClick} selected={selected}>
      <StyledOptionLetter>{letter}</StyledOptionLetter>
      <StyledParagraphCentered>{text}</StyledParagraphCentered>
    </StyledOptionSelector>
  );
};
