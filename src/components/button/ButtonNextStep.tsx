import { Link } from "react-router-dom";
import { StyledNextButton } from "../styles/button/Button.styled";

export const ButtonNextStep = () => {
  return (
    <Link to={`/`}>
      <StyledNextButton>Comenzar</StyledNextButton>
    </Link>
  );
};
