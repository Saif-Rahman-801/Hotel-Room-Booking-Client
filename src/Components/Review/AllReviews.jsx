import PropTypes from "prop-types"

const AllReviews = ({peoplereviews}) => {

  return (
    <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">{peoplereviews.length} Reviews</h2>
      <div className="grid grid-cols-1 gap-4">
        {peoplereviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded-lg flex flex-col justify-between"
          >
            <div className="mb-2">
              <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-gray-600">Ratings: {review.ratings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AllReviews.propTypes = {
  peoplereviews: PropTypes.shape({
    length: PropTypes.any,
    map: PropTypes.func
  })
}

export default AllReviews;
