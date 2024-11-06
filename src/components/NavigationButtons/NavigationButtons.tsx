import { ButtonNextStep } from "../button/ButtonNextStep";
import { ButtonPreviousStep } from "../button/ButtonPreviousStep";
import { ContainerButtonPagination } from "../styles/container/Container.styled";

interface Props {
  text: string;
  isFirstORLastPage: boolean;
  nextPage: string;
  previousPage?: string;
}

export const NavigationButtons = ({
  text,
  isFirstORLastPage,
  nextPage,
  previousPage,
}: Props) => {
  return (
    <ContainerButtonPagination>
      {!isFirstORLastPage && <ButtonPreviousStep link={previousPage || ""} />}
      <ButtonNextStep
        text={text}
        nextPage={nextPage}
        isFirstORLastPage={isFirstORLastPage}
      />
    </ContainerButtonPagination>
  );
};
