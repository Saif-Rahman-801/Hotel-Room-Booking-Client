import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { useState } from "react";
import { toast } from "react-toastify";

const Rooms = () => {
  const data = useLoaderData();
  const [roomData, setRoomData] = useState(data);
  const handleFilter = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    if (price < 80 || price > 250) {
      toast.error("Please put your price between 80$ to 250$");
      return;
    }

    const filteredData = roomData.filter((data) => data.pricePerNight <= price);
    // console.log(filteredData);
    setRoomData(filteredData);
    e.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleFilter}
        className="flex items-center justify-center space-x-4 my-5"
      >
        <input
          type="number"
          name="price"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter price to filter"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 font-medium rounded-md transition duration-300">
          Filter
        </button>
      </form>
      <div className="flex justify-center">
        <button
          onClick={() => setRoomData(data)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 font-medium rounded-md transition duration-300"
        >
          See All
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 ">
        {roomData.map((data) => (
          <RoomCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
