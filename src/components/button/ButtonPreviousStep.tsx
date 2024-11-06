import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { StyledPreviousButton } from "../styles/button/Button.styled";

export const ButtonPreviousStep = ({ link }: { link: string }) => {
  return (
    <Link to={link}>
      <StyledPreviousButton>
        <img src={arrow} alt="arrow" />
      </StyledPreviousButton>
    </Link>
  );
};
