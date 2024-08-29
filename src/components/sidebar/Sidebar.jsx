"use client";

import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";
import Link from "next/link";
import "./sidebar.scss";
import { useState } from "react";

import { BurgerButton } from "../newBurgerButton/BurgerButton";
import DarkMode from "../darkMode/DarkMode";

const Sidebar = ({ navLinks, socialLinks }) => {
  const [open, setopen] = useState(false);

  const sidebarVars = {
    close: {
      scaleX: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        ease: easeIn,
      },
    },
    open: {
      scaleX: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        ease: easeOut,
      },
    },
  };
  const sideBarLinkVars = {
    close: {
      y: "10vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  const sideBarLineVars = {
    close: {
      y: "10vh",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };
  const containerVars = {
    close: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  if (typeof window !== "undefined") {
    open
      ? document.body.classList.add("fixed", "inset-0")
      : document.body.classList.remove("fixed", "inset-0");
  }

  return (
    <>
      <motion.div
        className="block md:hidden relative  z-10"
        style={{ transform: "translateX(20px) scale(0.5)" }}
      >
        <BurgerButton open={open} setopen={setopen} />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.aside
            variants={sidebarVars}
            initial="close"
            animate="open"
            exit="close"
            className={
              "flex bg-sidebar touch-none backdrop-blur-[10px] origin-left md:hidden fixed inset-0 p-6 space-y-10 flex-col justify-center"
            }
          >
            <motion.ul
              className="text-4xl space-y-5 font-bold"
              variants={containerVars}
            >
              <div className="overflow-hidden">
                <motion.li variants={sideBarLinkVars}>
                  <DarkMode />
                </motion.li>
              </div>
              {navLinks.map((link) => (
                <div key={link.href} className="overflow-hidden">
                  <Link href={link.href} onClick={() => setopen(false)}>
                    <motion.li
                      className="inline-block"
                      variants={sideBarLinkVars}
                    >
                      {link.value}
                    </motion.li>
                  </Link>
                </div>
              ))}
            </motion.ul>

            <div className="overflow-hidden">
              <motion.div
                initial={false}
                variants={sideBarLineVars}
                className="w-full bg-white h-px"
              ></motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div variants={sideBarLinkVars}>
                <ul className="flex gap-x-5 items-center justify-center">
                  {socialLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <li
                        dangerouslySetInnerHTML={{ __html: link.value }}
                        className=""
                      ></li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
