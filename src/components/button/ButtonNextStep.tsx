import { useLocation, useNavigate } from "react-router-dom";
import { StyledNextButton } from "../styles/button/Button.styled";
import arrow from "../../assets/arrow-right.png";
import { ArrowImg } from "../styles/image/Image.styled";
import { useSurvey } from "../../hooks/useSurvey";

interface Props {
  text: string;
  nextPage: string;
  isFirstORLastPage?: boolean;
}

export const ButtonNextStep = ({
  text,
  nextPage,
  isFirstORLastPage,
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useSurvey();

  const handleClick = () => {
    const route = location.pathname.split("/")[1];
    if (state[route] || route === "step-6") {
      navigate(nextPage);
    }
  };
  return (
    <StyledNextButton onClick={handleClick}>
      {text}
      <ArrowImg
        src={arrow}
        alt="arrow"
        $isFirstORLastPage={isFirstORLastPage}
      />
    </StyledNextButton>
  );
};
