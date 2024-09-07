import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Logo from "./Svgs/logo.svg";
import DarkMode from "./DarkMode";

const navLinks = [
  { href: "/products", value: "Products" },
  { href: "/contact-us", value: "Contact" },
  { href: "/about-us", value: "About" },
];

const Navbar = () => {
  return (
    <>
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1 p-2 text-para focus-visible:outline-offset-1 focus-visible:outline-4"
      >
        Skip to main content
      </Link>

      <header
        id="header"
        role="banner"
        className="site_header mt-4 text-para w-full mx-auto transition-all duration-300 "
        // className="site_header fixed z-10 top-0 left-0 bg-white/5 backdrop-blur-md text-para w-full mx-auto transition-all duration-300 "
      >
        <nav
          className="navbar site_layout_lg flex justify-between items-center h-12 lg:h-auto"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/*________________ ++ LOGO ++ _________________ */}

          <div className="logo">
            <Link aria-label="logo" href="/">
              <Logo className="lg:text-7xl text-5xl text-sky-400/90" />
            </Link>
          </div>

          <ul className="hidden md:flex [&>li]:relative">
            <li className="relative -top-[2px] -left-2">
              {/*________________ ++ DARK MODE ++ _________________ */}
              <DarkMode />
            </li>
            {navLinks.map((link) => (
              <li className="mx-[8px] pb-[2px]" key={link.href}>
                <Link href={link.href}>{link.value}</Link>
              </li>
            ))}
          </ul>
          {/*________________ ++ SIDEBAR ++ _________________ */}

          <Sidebar navLinks={navLinks} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
