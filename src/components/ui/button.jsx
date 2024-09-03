function Button({ children }) {
  return (
    <button className="middle none center rounded-lg bg-green-600 py-3 px-6 text-sm font-bold uppercase text-white shadow-md shadow-green-600/20 transition-all hover:shadow-lg hover:shadow-green-600/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      {children}
    </button>
  );
}

export default Button;
