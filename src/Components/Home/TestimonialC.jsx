import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialC = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    
      <div className="grid grid-cols-2 my-10">
        <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
    </Slider>
      </div>
  );
};

export default TestimonialC;
