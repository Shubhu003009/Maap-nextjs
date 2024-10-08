"use client";

import {
  m,
  AnimatePresence,
  MotionConfig,
  LazyMotion,
  domAnimation,
} from "framer-motion";

import Link from "next/link";
import SocialLinks from "./Ui/SocialLinks";

import { useEffect, useState } from "react";
import { BurgerButton } from "./BurgerButton";

const sidebarVars = {
  close: {
    opacity: 0,
    transition: {
      ease: [0.075, 0.82, 0.165, 1.0],
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.075, 0.82, 0.165, 1.0],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.075, 0.82, 0.165, 1.0],
    },
  },
};
const sideBarLinkVars = {
  close: {
    y: "10vh",
    transition: {
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
const containerVars = {
  close: {
    transition: {
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const Sidebar = ({ navLinks }) => {
  const [open, setopen] = useState(false);

  useEffect(() => {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  });

  return (
    <>
      <LazyMotion features={domAnimation}>
        <div
          className="h-[200%] md:hidden relative z-20"
          style={{ transform: "translateX(20px) scale(0.5)" }}
        >
          <BurgerButton
            open={open}
            setopen={setopen}
            m={m}
            MotionConfig={MotionConfig}
          />
        </div>

        <AnimatePresence>
          {open && (
            <m.aside
              variants={sidebarVars}
              initial="close"
              animate="open"
              exit="exit"
              className={
                "z-10 text-color_front bg-color_back touch-none flex flex-col justify-center md:hidden fixed min-h-svh inset-0 p-6 space-y-10"
              }
            >
              <m.ul
                className="text-3xl space-y-5 font-bold tracking-tighter"
                variants={containerVars}
              >
                <li className="overflow-hidden">
                  <m.div variants={sideBarLinkVars}>
                    <Link href="/" onClick={() => setopen(false)}>
                      Home
                    </Link>
                  </m.div>
                </li>
                {navLinks.map((link) => (
                  <li key={link.href} className="overflow-hidden">
                    <m.div variants={sideBarLinkVars}>
                      <Link href={link.href} onClick={() => setopen(false)}>
                        {link.value}
                      </Link>
                    </m.div>
                  </li>
                ))}
              </m.ul>

              <div className="divider-line w-full bg-sky-400 h-px"></div>

              <SocialLinks />
            </m.aside>
          )}
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

export default Sidebar;
