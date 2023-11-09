
const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Have any questions or concerns? Feel free to reach out to us. We
              are here to help!
            </p>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Phone: +1 (123) 456-7890
              </li>
              <li className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 10l5 5m0 0l5-5m-5 5V3"
                  />
                </svg>
                Email: info@thegrandbonjour.com
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Address: 1234 Elm St, Cityville, ST 56789
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="mb-4 p-2 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mb-4 p-2 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="mb-4 p-2 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
