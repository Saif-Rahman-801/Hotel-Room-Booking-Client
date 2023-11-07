import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const RoomCard = ({ data }) => {
  return (
    <div>
     
      <Link to="/roomDetails">
        <div className="my-5">
          <div className="card h-[400px] bg-base-100 shadow-xl">
            <figure>
              <img src={data.roomImage} alt="room" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{data.roomType} </h2>
              <h2 className="text-sm font-bold">
                Ratings:{" "}
                <span className="text-orange-600"> {data.reviews}</span>{" "}
              </h2>
              <p className="text-sm text-gray-600 font-medium">
                Price: {data.pricePerNight}$ Per night
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

RoomCard.propTypes = {
  data: PropTypes.any,
};

export default RoomCard;
