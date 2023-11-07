import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const roomData = useLoaderData();

  return (
    <div >
      <div className="grid grid-cols-3 gap-6 ">
        {roomData.map((data) => (
          <RoomCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
