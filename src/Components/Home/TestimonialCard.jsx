import PropTypes from "prop-types";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border-2 border-solid border-gray-50">
      <div className="bg-white shadow-lg p-4 rounded-lg h-auto">
        <h2 className="text-xl font-bold mb-2">{testimonial.name}</h2>
        <p className="text-gray-700 font-medium">{testimonial.description}</p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.any,
};

export default TestimonialCard;
