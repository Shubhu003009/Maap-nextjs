// import { useTheme } from "@/contexts/Theme";
// import { usePathname } from "next/navigation";

// export const AnnouncementBar = () => {
//   const { theme } = useTheme();
//   const pathname = usePathname();

//   const colorCondition =
//     pathname === "/"
//       ? theme
//         ? "bg-[#E7E8D1] !text-black "
//         : "bg-[#B85042] !text-white"
//       : theme
//       ? "bg-[#E7E8D1] !text-black"
//       : "bg-[#A7BEAE]";

//   return (
//     <motion.div
//       variants={TopBarVars}
//       initial="open"
//       animate="show"
//       className={`leading-3 tracking-[3px] !text-[9px] sm:!text-[10px] text-center py-[10px] px-[5px] ${colorCondition}`}
//     >
//       <motion.p variants={TopBarLinkVars}>
//         <Link href="#">BUY 3 OF ANY TREATS & SAVE $5 | DISCOUNT IN CART</Link>
//       </motion.p>
//     </motion.div>
//   );
// };
