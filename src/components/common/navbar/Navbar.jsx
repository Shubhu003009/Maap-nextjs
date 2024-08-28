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
      // '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="#4267B2"><path d="M22.675 0h-21.35C.597 0 0 .598 0 1.333v21.334C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.797.142v3.243l-1.918.001c-1.504 0-1.794.714-1.794 1.76v2.31h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.333V1.333C24 .598 23.403 0 22.675 0z"/></svg>',
  },
  { href: "#!instagram.com", value: "F" },
  { href: "#!whatsapp.com", value: "W" },
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
