import { useEffect, useMemo, useState } from "react";
import Heading from "../../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { testimonials } from "../Constants";
import { getTestimonialCardCount } from "../Utils";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
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
      slidesToShow: getTestimonialCardCount(windowSize.width),
      slidesToScroll: 1,
      autoplay: true,
    }),
    [windowSize]
  );

  return (
    <>
      <div className="testimonial_container">
        <Heading
          primaryText="what Our Clients Says About Us"
          secondaryText="TESTIMONIALS"
        />
        <div className="slider-container mt-4">
          <Slider {...carouselSetting}>
            {testimonials?.map((testimonial) => {
              return (
                <>
                  <div className="px-2">
                    <TestimonialCard
                      backgroundColor={testimonial.backgroundColor}
                      profileImage={testimonial?.profileImage}
                      message={testimonial?.message}
                      name={testimonial?.name}
                      role={testimonial?.role}
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

export default Testimonials;
