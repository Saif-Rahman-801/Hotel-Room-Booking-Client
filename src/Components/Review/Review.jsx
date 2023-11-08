
const Review = () => {
  const handleSubmit = () => {
    // Handle form submission logic
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-lg">
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
      {/* Hidden input field for timestamp (automatically generated on submission) */}
      <input type="hidden" name="timestamp" value={new Date().toISOString()} />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit Review
      </button>
    </div>
  );
};

export default Review;
