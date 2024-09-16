import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Logo from "/public/Svgs/logo.svg";
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
        className="font-bold sr-only hover:after:hidden focus:not-sr-only focus:absolute focus:top-1 focus:p-1 focus:left-1 text-color_front outline-offset-2 z-40"
      >
        Skip to main content
      </Link>
      <header
        id="header"
        role="banner"
        className="bg-primary_sky backdrop-blur-lg shadow-shadow_sm rounded-b-xl sticky top-0 site_header site_layout_lg z-30"
      >
        <nav
          className="navbar overflow-hidden relative site_layout_lg flex justify-between items-center h-12 lg:h-14"
          role="navigation"
          aria-label="Main Navigation"
        >
          <div className="logo">
            <Link aria-label="logo" href="/">
              <Logo className="lg:text-6xl text-5xl text-color_front" />
            </Link>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="md:relative md:-top-[2px] md:-left-2 absolute bottom-4 right-16 z-20">
              <DarkMode />
            </div>
            <ul className="site_nav h-full items-center hidden md:flex [&>li]:h-full [&>li>a]:h-full [&>li>a]:font-sans [&>li>a]:text-color_front [&>li>a]:flex [&>li>a]:items-center [&>li>a]:relative [&>li>a]:justify-center [&>li>a]:after:content-[''] [&>li>a]:after:left-0 [&>li>a]:after:bottom-0 [&>li>a]:after:w-full [&>li>a]:after:scale-x-0 [&>li>a]:hover:after:scale-x-100 [&>li>a]:after:h-[2px] [&>li>a]:hover:after:h-1 [&>li>a]:after:origin-center [&>li>a]:after:transition-all duration-500 [&>li>a]:after:absolute [&>li>a]:after:inline-block [&>li>a]:after:rounded-t-xl [&>li>a]:after:bg-white">
              {navLinks.map((link) => (
                <li key={link.href}>
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
