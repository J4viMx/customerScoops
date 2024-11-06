import { Link } from "react-router-dom";
import { StyledNextButton } from "../styles/button/Button.styled";
import arrow from "../../assets/arrow-right.png";
import { ArrowImg } from "../styles/image/Image.styled";

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
  return (
    <Link to={`${nextPage}`}>
      <StyledNextButton>
        {text}
        <ArrowImg
          src={arrow}
          alt="arrow"
          isFirstORLastPage={isFirstORLastPage}
        />
      </StyledNextButton>
    </Link>
  );
};
