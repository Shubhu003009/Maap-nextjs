import Link from "next/link";

const Button = ({ href = "#!", children }) => {
  return (
    <Link
      href={href}
      role="button"
      className="inline-block focus-visible:outline-offset-4  middle none center rounded-lg bg-[linear-gradient(to_right,_#828dff,_#7cddff)]  py-3 px-4 md:py-4 md:px-7 text-base md:text-lg md:tracking-normal font-bold uppercase text-white shadow-sm shadow-sky-600/20 transition-all hover:shadow-md hover:shadow-sky-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      {children}
    </Link>
  );
};

export default Button;
