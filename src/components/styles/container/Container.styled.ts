import styled from "styled-components";

interface ContainerProps {
  columns?: string;
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
`;

export const ContainerButtonPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 50px;
  gap: 10px;
`;

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : 2)},
    1fr
  );
  gap: 10px;
  margin: 0 auto;
`;

export const Item = styled.div`
  &:nth-child(odd):last-child {
    grid-column: 1 / -1;
  }
`;
