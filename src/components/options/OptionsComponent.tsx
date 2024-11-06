import { ButtonWithLetter } from "../button/ButtonWithLetter";
import { StyledOptionSelector } from "../styles/button/Button.styled";
import { Container, Item } from "../styles/container/Container.styled";

interface Props {
  options: string[];
  columns: string;
  isSpecialSelector?: boolean;
}

export const OptionsComponent = ({
  options = [],
  columns,
  isSpecialSelector,
}: Props) => {
  return (
    <Container columns={columns}>
      {options.map((item, index) => (
        <Item key={item}>
          {isSpecialSelector ? (
            <ButtonWithLetter
              text={item}
              letter={String.fromCharCode(96 + (index + 1))}
            />
          ) : (
            <StyledOptionSelector>{item}</StyledOptionSelector>
          )}
        </Item>
      ))}
    </Container>
  );
};
