import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Review = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const ratings = form.rating.value;
    const comment = form.comment.value;
    console.log(name, ratings, comment);
    const reviewData = {
      name, ratings, comment
    }
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Thanks for the review");
          navigate("/allreviews");
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Please Put Your Review</h2>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-600"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 p-2 w-full border rounded"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-gray-600"
        >
          Rating:
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          className="mt-1 p-2 w-full border rounded"
          placeholder="Enter your rating"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-600"
        >
          Comment:
        </label>
        <textarea
          id="comment"
          name="comment"
          className="mt-1 p-2 w-full border rounded"
          placeholder="Enter your comment"
        ></textarea>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Submit Review
      </button>
    </form>
  );
};

export default Review;
