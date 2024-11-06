import styled from "styled-components";

interface QuestionProps {
  $spacing?: boolean;
}
interface ParagraphProps {
  $isLastStep?: boolean;
}

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

export const StyledParagraphCentered = styled.p`
  text-align: center;
  font-size: 11px;
  flex: 1;
`;

export const StyledTextSubtitle = styled.p`
  font-size: 19px;
  font-weight: 900;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary};
  text-align: left;
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
  text-align: left;
  margin-top: 40px;
  font-weight: 500;
`;

export const StyledParagraph = styled.p<ParagraphProps>`
  font-weight: 400;
  font-size: ${(props) => props.theme.text.medium};
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary};
  text-align: left;

  @media (min-width: 768px) {
    font-size: ${(props) => (props.$isLastStep ? "30px" : "19px")};
    line-height: ${(props) => (props.$isLastStep ? "39px" : "19px")};
  }
`;

export const StyledParagraphQuestion = styled(StyledParagraph)<QuestionProps>`
  margin-top: ${(props) => (props.$spacing ? "50px" : "0px")};
  margin-bottom: 50px;
`;

export const StyledSpan = styled.span`
  font-weight: 900;
`;
