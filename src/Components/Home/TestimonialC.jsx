import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialC = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch(
      "https://hotel-room-booking-server-mh2xwcwcl-saifrahmans-projects.vercel.app/testimonials"
    )
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="w-[80%] mx-auto my-10">
      <h2 className="text-center font-bold text-3xl my-10">
        Read about us from out guests{" "}
      </h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialC;
