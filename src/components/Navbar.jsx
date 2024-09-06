import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import DarkMode from "./DarkMode";
import Logo from "./Svgs/logo.svg";

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
        className="sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1 p-2 bg-bg_para text-para focus-visible:outline-offset-1 focus-visible:outline-4"
      >
        Skip to main content
      </Link>

      <header
        role="banner"
        className="site_header mt-6 transition-all duration-300 text-para"
      >
        <nav
          className="navbar site_layout_lg flex justify-between items-center h-12 lg:h-auto"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/*________________ ++ LOGO ++ _________________ */}

          <div className="logo">
            <Link href="/">
              <Logo className="lg:text-7xl text-5xl text-sky-400/90" />
            </Link>
          </div>

          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className={`px-[8px] pb-[2px]`} href={link.href}>
                  {link.value}
                </Link>
              </li>
            ))}
            <li>
              {/*________________ ++ DARK MODE ++ _________________ */}

              <DarkMode />
            </li>
          </ul>
          {/*________________ ++ SIDEBAR ++ _________________ */}

          <Sidebar navLinks={navLinks} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
