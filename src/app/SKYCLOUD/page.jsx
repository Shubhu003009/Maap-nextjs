"use client";

import sounds from "@/utils/themeButtonSound";

const SKYCLOUD = () => {
  const s = sounds();
  return (
    <>
      <div className="site_layout">
        <h3 className="text-center text-[40px] text-blue-300">SKYCLOUD</h3>
        <div className="py-10 min-h-[200px] m-auto grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <NeumorphismButton onClick={() => s.Heylooo()} name={"Heeylo"} />
          <NeumorphismButton
            onClick={() => s.ankhri_sanse()}
            name={"ankhriSanse"}
          />
          <NeumorphismButton
            onClick={() => s.bright_future()}
            name={"brighFuture"}
          />
          <NeumorphismButton onClick={() => s.chatt_pe()} name={"chaatPe"} />
          <NeumorphismButton onClick={() => s.gyan()} name={"gyan"} />
          <NeumorphismButton onClick={() => s.deep()} name={"deep"} />
          <NeumorphismButton onClick={() => s.keso_ho()} name={"keseHo"} />
          <NeumorphismButton onClick={() => s.Arehh()} name={"arehh"} />
          <NeumorphismButton onClick={() => s.bhaiya()} name={"bhaiya"} />
        </div>
      </div>
    </>
  );
};

const NeumorphismButton = ({ onClick, name }) => {
  return (
    <button
      onClick={onClick}
      className={`
        hover:no-underline
        text-center
        text-teal-900
        bg-amber-100
        tracking-widest
        px-4 py-2 rounded-full 
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
    `}
    >
      {name}
    </button>
  );
};
export default SKYCLOUD;
