import styled from "styled-components";

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
