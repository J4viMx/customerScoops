import {
  ContainerBanner,
  ContainerPagination,
  Separator,
} from "../styles/container/Container.styled";
import {
  StyledImageBanner,
  StyledImageBannerDesktop,
  StyledImageLogo,
} from "../styles/image/Image.styled";
import imgBanner from "../../assets/banner_mobile.png";
import imgBannerDesktop from "../../assets/banner-desktop.png";
import logoBanner from "../../assets/logo_mobile.png";
import {
  StyledFirstNumber,
  StyledSecondNumber,
} from "../styles/text/Text.styled";

export const Banner = ({ pageNumber }: { pageNumber: string }) => {
  return (
    <ContainerBanner style={{ paddingLeft: "20px" }}>
      <StyledImageBanner src={imgBanner} alt="Banner mobile" />
      <StyledImageBannerDesktop src={imgBannerDesktop} alt="Banner desktop" />
      <StyledImageLogo src={logoBanner} alt="Logo Customer Scoops" />

      <ContainerPagination>
        <StyledFirstNumber>{pageNumber}</StyledFirstNumber>
        <Separator />
        <StyledSecondNumber>06</StyledSecondNumber>
      </ContainerPagination>
    </ContainerBanner>
  );
};
