import styled from "styled-components";

interface ContainerProps {
  $columns?: string;
}

interface ContainerMainProps {
  $isLastStep?: boolean;
}

interface ProgressBarProps {
  $progress: string;
}

interface ContainerButtonProps {
  $margin?: boolean;
}

export const ContainerBanner = styled.div`
  width: 100%;
  position: relative;
`;

export const ContainerPagination = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2;
`;

export const Separator = styled.div`
  width: 2px;
  height: 26px;
  margin-inline: 3px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContainerText = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const ContainerButtonPagination = styled.div<ContainerButtonProps>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
  gap: 10px;
  @media (min-width: 1024px) {
    margin-left: ${(props) => (props.$margin ? "-45px" : "0px")};
  }
`;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.$columns ? props.$columns : 2)},
    1fr
  );
  gap: 5px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      ${(props) => (props.$columns ? parseInt(props.$columns, 10) + 1 : 3)},
      1fr
    );
  }
`;

export const Item = styled.div`
  @media (max-width: 1023px) {
    &:nth-child(odd):last-child {
      grid-column: 1 / -1;
    }
  }
`;

export const ContainerMain = styled.main<ContainerMainProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    background-color: ${(props) =>
      props.$isLastStep ? props.theme.colors.blue : ""};
  }
`;

export const FirstItem = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
    order: 2;
  }
`;

export const SecondItem = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
    order: 1;
  }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 4px;
  width: ${(props) => props.$progress};
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;

  @media (min-width: 1024px) {
    height: 8px;
  }
`;
