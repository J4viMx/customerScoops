import styled from "styled-components";

interface SelectorProps {
  selected?: boolean;
}

export const StyledNextButton = styled.button`
  width: 100px;
  height: 35px;
  color: white;
  font-size: ${(props) => props.theme.text.small};
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  line-height: 13px;
  cursor: pointer;
`;

export const StyledPreviousButton = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledOptionSelector = styled.div<SelectorProps>`
  width: 100%;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => (props.selected ? "white" : props.theme.colors.primary)};
  font-size: ${(props) => props.theme.text.small};
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : "transparent"};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  line-height: 13px;
  cursor: pointer;
`;

export const StyledOptionLetter = styled.div`
  width: 15%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  font-weight: 900;
  margin-left: 5px;
  text-transform: uppercase;
`;
