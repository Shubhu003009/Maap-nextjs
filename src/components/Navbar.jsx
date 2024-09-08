import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Logo from "./Svgs/logo.svg";
import DarkMode from "./DarkMode";

const navLinks = [
  { href: "/contact", value: "Contact Us" },
  { href: "/products", value: "Products" },
  { href: "/about", value: "About" },
];

const Navbar = () => {
  return (
    <>
      <Link
        href="#main-content"
        className="font-bold sr-only hover:after:hidden focus:not-sr-only focus:absolute focus:top-1 focus:left-1 p-2 text-bg_para bg-para outline-offset-2 focus-visible:outline-4 z-10"
      >
        Skip to main content
      </Link>
      <header
        id="header"
        role="banner"
        className="site_header mt-4 text-para w-full mx-auto transition-all duration-300 "
      >
        <nav
          className="navbar relative site_layout_lg flex justify-between items-center h-12 lg:h-auto"
          role="navigation"
          aria-label="Main Navigation"
        >
          <div className="logo">
            <Link
              className="hover:after:hidden -outline-offset-1"
              aria-label="logo"
              href="/"
            >
              <Logo className="lg:text-7xl text-5xl text-sky-400/90" />
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <div className="md:relative md:-top-[2px] md:-left-2 absolute bottom-4 right-16 z-20">
              <DarkMode />
            </div>
            <ul className="hidden md:flex">
              {navLinks.map((link) => (
                <li className="mx-[8px] pb-[2px]" key={link.href}>
                  <Link href={link.href}>{link.value}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Sidebar navLinks={navLinks} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
