import Link from "next/link";
import SocialLinks from "./Ui/SocialLinks";

const Footer = () => {
  return (
    <>
      <footer className="relative pt-8 pb-6">
        <div className="site_layout site_padding_inline">
          <div className="flex justify-between gap-10 flex-wrap">
            <div>
              <h2 className="text-3xl font-semibold text-primary_dark font-lora">
                Let's keep in touch!
              </h2>
              <span className="text-sm mt-0 mb-2">
                Find us on any of these platforms, we respond 1-2 business days.
              </span>
              <SocialLinks />
            </div>
            <div>
              <div className="flex md:justify-end gap-10 md:gap-28 flex-wrap items-top mb-6">
                <div>
                  <span className="block uppercase text-primary_dark text-sm font-lora mb-4">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="/products"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block uppercase text-primary_dark text-sm font-lora mb-4">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="#!"
                      >
                        Testimonials
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="#!"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="#!"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-semibold block mb-2 text-sm"
                        href="#!"
                      >
                        Backlinks
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6 bg-primary_sky h-px"></div>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 mx-auto text-center">
              <div className="text-sm py-1 text-gray-500">
                Copyright © 2024 mountabuagroproducts.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
