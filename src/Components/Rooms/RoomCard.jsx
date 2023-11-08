import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RoomCard = ({ data }) => {
  const [bookedRooms, setBookedRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/bookedRoom")
      .then((res) => res.json())
      .then((data) => setBookedRooms(data));
  });

  const handleReview = (_id) => {
    const roomIds = bookedRooms.map((booking) => booking.roomId);
    const roomId = roomIds.find((id) => id === _id);
    if (roomId) {
      navigate("/review");
    } else {
      toast.error("Please Book the room to give a review");
    }
  };

  return (
    <div>
      <div className="my-5">
        <div className="card h-[400px] bg-base-100 shadow-xl">
          <figure>
            <Link to={`/roomDetails/${data._id}`}>
              <img src={data.roomImage} alt="room" />
            </Link>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{data.roomType} </h2>
            <h2 className="text-sm font-bold">
              Ratings: <span className="text-orange-600"> {data.reviews}</span>{" "}
            </h2>
            <p className="text-sm text-gray-600 font-medium">
              Price: {data.pricePerNight}$ Per night
            </p>

            <button
              onClick={() => handleReview(data._id)}
              className="btn btn-primary rounded-md"
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

RoomCard.propTypes = {
  data: PropTypes.any,
};

export default RoomCard;
