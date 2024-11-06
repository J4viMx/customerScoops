import styled from "styled-components";

export const StyledFirstNumber = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledSecondNumber = styled(StyledFirstNumber)`
  font-size: 10px;
  line-height: 12px;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  flex: 1;
`;

export const StyledTextSubtitle = styled.p`
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledTextTitle = styled(StyledTextSubtitle)`
  line-height: 39px;
  font-size: 30px;
`;

export const StyledTextItalic = styled.p`
  font-style: oblique;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.theme.colors.primary};
`;
