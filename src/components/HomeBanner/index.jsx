import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Banner,
  BannerContainer,
  BannerContent,
  BannerImage,
} from "./styledComponents";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeBanner = ({ images }) => {
  return (
    <>
      {images.length === 0 ? (
        <BannerContainer>
          <BannerImage>
            <img src="/home_banner.png" alt="Home Security and Appliances" />
          </BannerImage>
          <BannerContent>
            <h1>
              Welcome to One Stop Solution of Your Home Security and Electric
              Appliances
            </h1>
            <img
              src="/magic_tree_logo_transparent.png"
              alt="Home Security and Appliances"
            />
          </BannerContent>
        </BannerContainer>
      ) : (
        <Banner>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
          >
            <div>
              <img src="/banner1.png" alt="Banner 1" />
            </div>
            <div>
              <img src="/banner2.png" alt="Banner 2" />
            </div>
            <div>
              <img src="/banner3.png" alt="Banner 3" />
            </div>
          </Carousel>
        </Banner>
      )}
    </>
  );
};

export default HomeBanner;
