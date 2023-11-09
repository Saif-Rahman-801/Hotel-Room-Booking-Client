import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RoomDetails = () => {
  const roomData = useLoaderData();
  //   console.log(roomData);
  const [bookedRoomData, setBookedRoomData] = useState([]);
  const [bookedRoomIds, setBookedRoomIds] = useState([]);
  const [depState, setDepState] = useState(true);
  const [summery, setSummery] = useState(false);
  const navigate = useNavigate();

  const {
    roomImage,
    roomType,
    description,
    pricePerNight,
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
          navigate("/mybookings");
        }
      });
  };

  return (
    <div>
      <div className="flex w-96 md:w-full flex-col md:flex-row justify-center gap-10 my-10">
        <div className="card w-[400px] md:w-[500px] h-[500px] bg-base-100 shadow-xl">
          <figure>
            <img src={roomImage} alt="room" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{roomType} </h2>
            <div className="text-sm text-gray-700 font-medium w-[80%]">
              <p>Description: {description} </p>
              <p>Price: {pricePerNight}$ per night </p>
              <p>Size: {roomSize} </p>
              <p>Offer: {specialOffer} </p>
              <p>Guest Review: {reviews} </p>
            </div>
            <div className="card-actions justify-end">
              <button
                // onClick={handleBooking}
                onClick={() => setSummery(true)}
                className="btn btn-primary rounded-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            summery
              ? "summary-container bg-white p-4 rounded-md shadow-md"
              : "hidden"
          }
        >
          <h2 className="text-xl font-bold mb-2">Booking Summary</h2>
          <p>
            <strong>Room Type:</strong> {roomType}
          </p>
          <p className="my-4">
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Price:</strong> {pricePerNight}$ per night
          </p>
          <button
            onClick={handleBooking}
            className="btn btn-primary rounded-md my-5"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
