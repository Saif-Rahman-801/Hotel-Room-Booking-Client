
const ErrorComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <div className="text-red-500 text-4xl mb-4">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <div className="text-xl font-semibold mb-4">Error Occurred</div>
        <div className="text-gray-700 mb-4">Something went wrong. Please try again later.</div>
      </div>
    </div>
  );
};

export default ErrorComponent;
