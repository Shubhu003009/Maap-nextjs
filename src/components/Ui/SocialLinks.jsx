import Link from "next/link";

const SocialLinks = () => {
  return (
    <>
      <div className="[&>*]:flex [&>*]:justify-center [&>*]:hover:after:hidden [&>*]:outline-offset-4 flex md:justify-start flex-wrap gap-3 gap-y-3 mt-6 lg:mb-0 mb-6">
        <Link
          target="_blank"
          href="https://www.facebook.com/Kularia-Brothers-Turnkey-Projects-Pvt-Ltd-268655587118858/"
          aria-label="facebook"
          className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center rounded-full"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/kulariabrothers"
          aria-label="instagram"
          className="bg-white text-pink-500 shadow-lg font-normal h-10 w-10 items-center rounded-full"
        >
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/company/kularia-brothers-turnkey-projects-pvt-ltd"
          aria-label="linkedin"
          className="bg-white text-sky-800 shadow-lg font-normal h-10 w-10 items-center rounded-full"
        >
          <i className="fa-brands fa-linkedin" />
        </Link>
        <Link
          target="_blank"
          href="https://youtube.com/@kulariabrothers"
          aria-label="youtube"
          className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center rounded-full"
        >
          <i className="fa-brands fa-youtube"></i>
        </Link>
        <Link
          target="_blank"
          href="https://pin.it/60RcSBIdG"
          aria-label="pinterest"
          className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center rounded-full"
        >
          <i className="fa-brands fa-pinterest-p"></i>
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/KulariaL"
          aria-label="twitter"
          className="bg-white text-slate-800 shadow-lg font-normal h-10 w-10 items-center rounded-full"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </Link>
        <Link
          target="_blank"
          href="https://wa.me/919920445901?text=type%20your%20message"
          aria-label="whatsapp"
          className="bg-white text-green-500 shadow-lg font-normal h-10 w-10 items-center rounded-full"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
      </div>
    </>
  );
};

export default SocialLinks;
