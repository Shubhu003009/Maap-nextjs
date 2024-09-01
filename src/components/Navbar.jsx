import Link from "next/link";
import Sidebar from "@/components/Sidebar";
// import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DarkMode from "./DarkMode";

const navLinks = [
  { href: "/SKYCLOUD", value: "SKYCLOUD" },
  { href: "/contact-us", value: "Contact Us" },
  { href: "/about-us", value: "About" },
  { href: "/products", value: "Our Products" },
];

const NavContainerVars = {
  initial: {},
  open: {},
  opacity: 0,
};
const navLinkVars = {
  initial: { opacity: 0, y: -8 },
  open: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 0.2, ease: "easeOut" },
  },
};
const darkmodeVars = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { delay: 1 } },
};
const logoVars = {
  initial: { opacity: 0, y: 8 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const arrowDown = `<svg xmlns="http://www.w3.org/2000/svg" width="12"  height="16" viewBox="112 -234.8 512 512"><path d="M579.9-112.2L368,99.8l-211.9-212c-10.1-10.1-26.4-10.1-36.6,0c-10.1,10.1-10.1,26.5,0,36.6l230.2,230.3l0,0l0,0c10.1,10.1,26.4,10.1,36.5,0L616.4-75.6c10.1-10.1,10.1-26.5,0-36.6C606.4-122.3,590-122.3,579.9-112.2z"></path></svg>`;

const Navbar = () => {
  return (
    <>
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1 p-2 bg-primary_light text-primary_dark focus-visible:outline-offset-1 focus-visible:outline-4"
      >
        Skip to main content
      </Link>

      <header
        role="banner"
        className="site_header transition-colors duration-500 bg-primary_dark text-primary_light py-[10px] shadow-md"
      >
        {/* <AnimatePresence>
          <motion.nav
            variants={NavContainerVars}
            initial="initial"
            animate="open" */}
        <nav
          className="navbar site_layout_lg flex justify-between items-center max-h-[35px] md:max-h-max "
          role="navigation"
          aria-label="Main Navigation"
        >
          {/*________________ ++ LOGO ++ _________________ */}

          <div className="logo">
            {/* <div variants={logoVars} className="logo"> */}
            <h1 className="text-[1.5rem] md:text-[1.813rem] text-left font-serif ">
              <Link href="/">
                <Image width={60} height={60} src="/logo.png" alt="Logo" />
              </Link>
            </h1>
            {/* </motion.div> */}
          </div>

          <ul
            // <motion.ul
            className="hidden md:flex items-center font-sans"
            variants={navLinkVars}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                {/*________________ ++ LINKS ++ _________________ */}

                <Link
                  className={`px-[8px] pb-[2px] ${
                    link.value === "SKYCLOUD"
                      ? "text-2xl text-sky-300 font-bold"
                      : ""
                  }`}
                  href={link.href}
                >
                  {link.value}
                  {link.value === "Products" && (
                    <span
                      className="pl-[5px] [&>svg>path]:fill-primary_light"
                      dangerouslySetInnerHTML={{ __html: arrowDown }}
                    ></span>
                  )}
                </Link>
              </li>
            ))}
            <li>
              {/*________________ ++ DARK MODE ++ _________________ */}

              <button
                // <motion.button
                className="md:block hidden"
                variants={darkmodeVars}
              >
                <DarkMode />
                {/* </motion.button> */}
              </button>
            </li>
            {/* </motion.ul> */}
          </ul>
          {/*________________ ++ SIDEBAR ++ _________________ */}

          <Sidebar navLinks={navLinks} />
        </nav>
        {/* </motion.nav> */}
        {/* </AnimatePresence> */}
      </header>
    </>
  );
};

export default Navbar;
