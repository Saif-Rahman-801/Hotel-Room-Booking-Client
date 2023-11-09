import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const MyBookings = () => {
  const bookedRooms = useLoaderData();
  const [bookedData, setbookedData] = useState(bookedRooms);

  const handleDeleteBooking = (roomId) => {
    fetch(`http://localhost:5000/bookedRoom/${roomId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Booking deleted successfully");
          const remaining = bookedData.filter((data) => data._id !== roomId);
          setbookedData(remaining);
        }
      });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      {bookedData.map((booking) => (
        <div
          key={booking.roomId}
          className="border p-4 mb-4 flex justify-between items-center"
        >
          <div>
            <p className="text-lg font-semibold">
              Room Type: {booking.roomType}
            </p>
            <p className="text-gray-700">Room ID: {booking._id}</p>
          </div>
          <button
            onClick={() => handleDeleteBooking(booking._id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
