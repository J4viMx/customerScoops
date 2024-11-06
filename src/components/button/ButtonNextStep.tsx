import { Link } from "react-router-dom";
import { StyledNextButton } from "../styles/button/Button.styled";

interface Props {
  text: string;
  nextPage: string;
}

export const ButtonNextStep = ({ text, nextPage }: Props) => {
  return (
    <Link to={`${nextPage}`}>
      <StyledNextButton>{text}</StyledNextButton>
    </Link>
  );
};
