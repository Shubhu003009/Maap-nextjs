import Link from "next/link";
import SocialLinks from "./Ui/SocialLinks";

const Footer = () => {
  return (
    <>
      <footer className="relative rounded-t-[15px] md:rounded-t-[30px] pt-10 pb-1 shadow-shadow_sm bg-primary_sky">
        <div className="site_layout site_padding_inline">
          <div className="md:flex justify-between gap-10 flex-wrap">
            <div>
              <h2 className="text-2xl text-color_front font-syne md:text-3xl font-semibold uppercase">
                Let's keep in touch!
              </h2>
              <span className="text-xs font-medium text-para mt-0 mb-2 uppercase">
                Find us on any of these platforms, we respond 1-2 business days.
              </span>
              <SocialLinks />
            </div>
            <div>
              <div className="md:flex md:justify-end gap-10 md:gap-28 flex-wrap items-top mb-6">
                <div>
                  <span className="block uppercase text-color_front text-base font-syne mb-4">
                    Useful Links
                  </span>
                  <ul className="[&>li>a]:block [&>li>a]:text-color_front [&>li>a]:py-2 [&>li>a]:font-syne text-sm font-semibold mb-5 md:mb-0">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/products">Products</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block uppercase text-base text-color_front font-syne mb-4">
                    Other Resources
                  </span>
                  <ul className="[&>li>a]:block [&>li>a]:font-syne [&>li>a]:text-color_front [&>li>a]:py-2 text-sm font-semibold">
                    <li>
                      <Link href="#!">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="#!">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link href="#!">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#!">Backlinks</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="my-6 bg-green-500 h-px"></div>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 mx-auto text-center">
              <div className="text-sm py-5 text-color_front">
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
