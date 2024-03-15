import { useEffect, useMemo, useState } from "react";
import Heading from "../../../../Common/Heading";
import StoryCard from "./StoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { stories } from "../Constants";
import { getCardCount } from "../Utils";

const SpotiLight = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselSetting = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: getCardCount(windowSize.width),
      slidesToScroll: 1,
      autoplay: true,
    }),
    [windowSize]
  );

  return (
    <>
      <div className="spotlight_container">
        <Heading primaryText="Top Trending Stories" secondaryText="SPOTLIGHT" />
        <div className="slider-container mt-4">
          <Slider {...carouselSetting}>
            {stories?.map((story) => {
              return (
                <>
                  <div className="px-2">
                    <StoryCard
                      title={story?.title}
                      subTitle={story?.subTitle}
                      backgroundImg={story?.backgroundImg}
                    />
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SpotiLight;
