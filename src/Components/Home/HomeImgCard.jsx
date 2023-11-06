import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomeImgCard = ({ img }) => {
  useEffect(() => {
    AOS.init({
      // Global settings here (optional)
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <img src={img.url} className="w-full h-full md:h-[500px] rounded-md" />
    </div>
  );
};

HomeImgCard.propTypes = {
  img: PropTypes.any,
};

export default HomeImgCard;
