export const BurgerButton = ({ open, setopen, MotionConfig, m }) => {
  const bgtheme = `bg-para`;
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <m.button
        animate={open ? "open" : "closed"}
        onClick={() => {
          setopen((pv) => !pv);
        }}
        className={`[&>span]:transition-colors [&>span]:duration-200 mt-[18px] relative h-[80%] w-20 rounded-full`}
        aria-label="sidebar"
      >
        <m.span
          variants={VARIANTS.top}
          className={`absolute h-1 w-10 ${bgtheme}`}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <m.span
          variants={VARIANTS.middle}
          className={`absolute h-1 w-10 ${bgtheme}`}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <m.span
          variants={VARIANTS.bottom}
          className={`absolute h-1 w-5 ${bgtheme}`}
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </m.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
