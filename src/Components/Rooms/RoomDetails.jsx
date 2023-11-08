import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const RoomDetails = () => {
  const roomData = useLoaderData();
  console.log(roomData);
  const {
    roomImage,
    roomType,
    description,
    pricePerNight,
    availability,
    roomSize,
    specialOffer,
    reviews,
    _id,
  } = roomData;

  const bookingData = {
    roomId: _id,
    roomType,
  };

  const handleBooking = () => {
    fetch("http://localhost:5000/bookedRoom", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.insertedId){
            toast.success("Successfully Booked Your Room");
        }
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card w-[500px] h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img src={roomImage} alt="room" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{roomType} </h2>
          <div className="text-sm text-gray-700 font-medium">
            <p>Description: {description} </p>
            <p>Price: {pricePerNight}$ per night </p>
            <p>Size: {roomSize} </p>
            <p>Offer: {specialOffer} </p>
            <p>Guest Review: {reviews} </p>
            <p>Available Room: {availability} </p>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={handleBooking}
              className="btn btn-primary rounded-md"
            >
              Book Now{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
