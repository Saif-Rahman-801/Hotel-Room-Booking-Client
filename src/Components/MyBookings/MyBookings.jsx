import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const MyBookings = () => {
  const bookedRooms = useLoaderData();
  const [bookedData, setbookedData] = useState(bookedRooms);

  const handleDeleteBooking = (roomId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this booking!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://hotel-room-booking-server-five.vercel.app/bookedRoom/${roomId}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Success!", "Booking deleted successfully!", "success");
              const remaining = bookedData.filter(
                (data) => data._id !== roomId
              );
              setbookedData(remaining);
            } else {
              Swal.fire("Error", "Failed to delete booking", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting booking:", error);
            Swal.fire("Error", "Failed to delete booking", "error");
          });
      }
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      {bookedData.map((booking) => (
        <div
          key={booking._id}
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
