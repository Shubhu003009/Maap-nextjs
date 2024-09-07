const SocialLinks = () => {
  return (
    <>
      <div className="flex md:justify-start flex-wrap gap-1 gap-y-2 md:gap-0 mt-6 lg:mb-0 mb-6">
        <button
          aria-label="twitter"
          className="bg-white text-slate-800 shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </button>
        <button
          aria-label="facebook"
          className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </button>
        <button
          aria-label="pinterest"
          className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fa-brands fa-pinterest-p"></i>
        </button>
        <button
          aria-label="linkedin"
          className="bg-white text-sky-800 shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fa-brands fa-linkedin" />
        </button>
        <button
          aria-label="instagram"
          className="bg-white text-pink-500 shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fa-brands fa-instagram"></i>
        </button>
        <button
          aria-label="whatsapp"
          className="bg-white text-green-500 shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </button>
        <button
          aria-label="youtube"
          className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center rounded-full outline-none focus:outline-none mr-2"
          type="button"
        >
          <i className="fa-brands fa-youtube"></i>
        </button>
      </div>
    </>
  );
};

export default SocialLinks;
