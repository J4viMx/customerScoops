import { useLocation, useNavigate } from "react-router-dom";
import { StyledNextButton } from "../styles/button/Button.styled";
import arrow from "../../assets/arrow-right.png";
import { ArrowImg } from "../styles/image/Image.styled";
import { useSurvey } from "../../hooks/useSurvey";
import { toast } from "react-toastify";

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
  const { state, dispatch } = useSurvey();

  const handleClick = () => {
    const route = location.pathname.split("/")[1];
    if (state[route]) {
      navigate(nextPage);
      toast.dismiss(route);
      return;
    }
    if (route === "step-6") {
      dispatch({
        type: "RESET_SURVEY",
      });
      window.location.href = "https://www.customerscoops.com/";
      return;
    }

    toast("Por favor completa la información", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      type: "info",
      toastId: route,
    });
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
