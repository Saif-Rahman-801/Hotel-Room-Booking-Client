
const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          About The Grand Bonjour
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to The Grand Bonjour, where we take pride in offering a
              luxurious and comfortable retreat for travelers. With a rich
              history and a commitment to exceptional service, we have become a
              renowned name in the hospitality industry.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our dedicated team of professionals strives to make your stay
              unforgettable, ensuring that every aspect of your experience is
              tailored to perfection. From elegantly designed rooms to exquisite
              dining options, we provide a seamless blend of modern amenities
              and classic charm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
