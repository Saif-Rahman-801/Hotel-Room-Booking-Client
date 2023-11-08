import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const RoomDetails = () => {
  const roomData = useLoaderData();
  //   console.log(roomData);
  const [bookedRoomData, setBookedRoomData] = useState([]);
  const [bookedRoomIds, setBookedRoomIds] = useState([]);
  const [depState, setDepState] = useState(true);
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

  useEffect(() => {
    const loadBookedData = async () => {
      const res = await fetch("http://localhost:5000/bookedRoom");
      const data = await res.json();
      return data;
    };

    const fetchData = async () => {
      const bookedData = await loadBookedData();
      setBookedRoomData(bookedData);

      const roomIds = bookedData.map((booking) => booking.roomId);
      setBookedRoomIds(roomIds);
    };
    fetchData();
  }, [depState]);
  console.log(bookedRoomData);

  console.log(bookedRoomIds);
  const handleBooking = () => {
    setDepState(!depState);
    if (bookedRoomIds.find((bookingId) => bookingId === _id)) {
      toast.error(
        "We are sorry, The Room is already booked, Please explore other rooms"
      );
      return;
    }

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
        if (data.insertedId) {
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
