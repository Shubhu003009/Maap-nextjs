"use client";

import "./navbar.scss";
import Link from "next/link";
import Sidebar from "../../sidebar/Sidebar";
import DarkMode from "../../darkMode/DarkMode";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", value: "Home" },
  { href: "/contact-us", value: "Contact" },
  { href: "/about-us", value: "About" },
  { href: "/products", value: "Products" },
];

const socialLinks = [
  {
    href: "#faceboom.com",
    value:
      '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="#4267B2"><path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.797.142v3.243l-1.918.001c-1.504 0-1.794.714-1.794 1.76v2.31h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.333V1.333C24 .598 23.403 0 22.675 0z"/></svg>',
  },
  {
    href: "#!instagram.com",
    value:
      '<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c65d72"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z" fill="#fec3cf"></path> </g></svg>',
  },
  {
    href: "#!whatsapp.com",
    value:
      '<svg width="50px" height="50px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Whatsapp-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -360.000000)" fill="#67C15E"> <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" id="Whatsapp"> </path> </g> </g> </g></svg>',
  },
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

const Navbar = () => {
  return (
    <>
      <header className="site_header site_layout_lg">
        <AnimatePresence>
          <motion.nav
            variants={NavContainerVars}
            initial="initial"
            animate="open"
            className="navbar max-h-[35px] md:max-h-max"
          >
            {/* LOGO */}
            <motion.div variants={logoVars} className="logo">
              <Link href="/">
                <h3 className="text-[1.25rem] font-semibold sm:text-[1.813rem] text-left">
                  MAPP
                </h3>
              </Link>
            </motion.div>

            {/* LINKS */}
            <motion.ul variants={navLinkVars}>
              {navLinks.map((link) => (
                <li className="text-base mx-[.7rem]" key={link.href}>
                  <Link href={link.href}>
                    {link.value}{" "}
                    {link.value === "Products" && (
                      <svg
                        className="inline"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="112 -234.8 512 512"
                      >
                        <path d="M579.9-112.2L368,99.8l-211.9-212c-10.1-10.1-26.4-10.1-36.6,0c-10.1,10.1-10.1,26.5,0,36.6l230.2,230.3 l0,0l0,0c10.1,10.1,26.4,10.1,36.5,0L616.4-75.6c10.1-10.1,10.1-26.5,0-36.6C606.4-122.3,590-122.3,579.9-112.2z"></path>
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </motion.ul>

            {/* DARK MODE */}
            <motion.span variants={darkmodeVars}>
              <DarkMode />
            </motion.span>

            <Sidebar socialLinks={socialLinks} navLinks={navLinks} />
          </motion.nav>
        </AnimatePresence>
      </header>
    </>
  );
};

const TopBarVars = {
  open: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.9,
      delay: 0.4,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const TopBarLinkVars = {
  open: {
    opacity: 0,
    y: -5,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default Navbar;
