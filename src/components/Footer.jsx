import SocialLinks from "./Ui/SocialLinks";

const Footer = () => {
  return (
    <>
      <footer className="relative pt-8 pb-6">
        <div className="container mx-auto">
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
                  <span className="block uppercase text-sm font-lora mb-4">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block uppercase text-sm font-lora mb-4">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block mb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
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
