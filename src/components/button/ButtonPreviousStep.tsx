import { Link, useLocation } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import { StyledPreviousButton } from "../styles/button/Button.styled";
import { toast } from "react-toastify";

export const ButtonPreviousStep = ({ link }: { link: string }) => {
  const location = useLocation();

  const handleClick = () => {
    const route = location.pathname.split("/")[1];
    toast.dismiss(route);
  };
  return (
    <Link to={link}>
      <StyledPreviousButton onClick={handleClick}>
        <img src={arrow} alt="arrow" />
      </StyledPreviousButton>
    </Link>
  );
};
