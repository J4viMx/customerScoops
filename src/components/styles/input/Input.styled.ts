import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 2px solid #aaa;
  font-size: ${(props) => props.theme.text.medium};
  color: #aaa;
  background-color: transparent;
  outline: none;

  &:focus {
    border-bottom-color: #aaaa;
  }

  &::placeholder {
    color: #aaa;
  }
`;
