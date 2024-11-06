import { ButtonWithLetter } from "../button/ButtonWithLetter";
import { StyledOptionSelector } from "../styles/button/Button.styled";
import { Container, Item } from "../styles/container/Container.styled";

interface Props {
  options: string[];
  columns: string;
  isSpecialSelector?: boolean;
  handleClick: (value: string) => void;
  selected: string | number | null;
}

export const OptionsComponent = ({
  options = [],
  columns,
  isSpecialSelector,
  handleClick,
  selected,
}: Props) => {
  return (
    <Container $columns={columns}>
      {options.map((item, index) => (
        <Item key={item}>
          {isSpecialSelector ? (
            <ButtonWithLetter
              text={item}
              selected={selected === item}
              handleClick={() => handleClick(item)}
              letter={String.fromCharCode(96 + (index + 1))}
            />
          ) : (
            <StyledOptionSelector
              selected={selected === item}
              onClick={() => handleClick(item)}
            >
              {item}
            </StyledOptionSelector>
          )}
        </Item>
      ))}
    </Container>
  );
};
