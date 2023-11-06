const Banner = () => {
  return (
    <div className="relative h-96 bg-gray-900 text-white flex items-center justify-center rounded-md mt-5">
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/thfcQJ9/vojtech-bruzek-Yrxr3bs-Pd-S0-unsplash.jpg"
          alt="Overlay"
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h1>
        <div className="max-w-md mx-auto">
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="mr-2 px-4 py-2 w-3/4 bg-gray-800 border border-gray-700 rounded-l focus:outline-none"
            />
            <button className="px-6 py-2 bg-blue-500 rounded-r hover:bg-blue-600 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
