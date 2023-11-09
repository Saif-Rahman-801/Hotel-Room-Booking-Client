import { useEffect, useState } from "react";
import HomeImgCard from "./HomeImgCard";
import { Link } from "react-router-dom";

const HomeImg = () => {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homeImg")
      .then((res) => res.json())
      .then((data) => setImgData(data));
  }, []);
  return (
    <div className="my-5">
        <div className="text-center text-3xl font-bold my-5">
            <h2>EXPLORE OUR ROOMS VIEW</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {imgData.map((img) => (
          <HomeImgCard key={img._id} img={img} />
        ))}
      </div>
      <div className="text-center my-5">
        <Link to="/rooms">
        <button className="btn btn-primary rounded-md">
          Book Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeImg;
