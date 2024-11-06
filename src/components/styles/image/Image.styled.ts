import styled from "styled-components";

interface ImageProps {
  isFirstORLastPage?: boolean;
}

export const StyledImageBanner = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledImageLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledImageBannerDesktop = styled.img`
  width: 100%;
  height: 100vh;
  /* object-position: center; */
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const StyledImageLogoDesktop = styled.img`
  display: none;
  width: 113px;
  height: 41px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const ArrowImg = styled.img<ImageProps>`
  display: none;
  @media (min-width: 768px) {
    display: ${(props) => (props.isFirstORLastPage ? "none" : "block")};
  }
`;
