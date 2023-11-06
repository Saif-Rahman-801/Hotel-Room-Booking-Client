import PropTypes from "prop-types";
const HomeImgCard = ({ img }) => {
  return (
    <div>
      <img src={img.url} className="w-full h-[500px] rounded-md" />
    </div>
  );
};

HomeImgCard.propTypes = {
  img: PropTypes.any,
};

export default HomeImgCard;
