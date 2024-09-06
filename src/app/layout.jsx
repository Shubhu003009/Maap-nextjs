import Navbar from "@/components/Navbar";
import "./globals.scss";
import { ThemeProvider } from "@/contexts/Theme";
import {
  Lato,
  DM_Sans,
  Poppins,
  Josefin_Sans,
  Oswald,
  Open_Sans,
  Lora,
  Mulish,
  Lexend_Deca,
} from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  subsets: ["latin"],
});
const lexend_Deca = Lexend_Deca({
  variable: "--font-lexend_Deca",
  subsets: ["latin"],
});
const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  subsets: ["latin"],
});
const lora = Lora({
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  subsets: ["latin"],
});
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});
const open_Sans = Open_Sans({
  variable: "--font-open_Sans",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
});
const josefinSans = Josefin_Sans({
  variable: "--font-josefinSans",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Mountabu Agro Products",
  description:
    "Welcome to Mountabu Agro Products, your source for quality agricultural products.",
  keywords: "agriculture, products, organic, Mountabu",
  authors: [{ name: "Manish Kularia", name: "Shubham Jangid" }],
  openGraph: {
    title: "Home | Mountabu Agro Products",
    description: "Explore our range of agricultural products.",
    url: "https://yourdomain.com",
    siteName: "Mountabu Agro Products",
    images: [
      {
        url: "https://yourdomain.com/image.jpg",
        width: 800,
        height: 600,
        alt: "Mountabu Agro Products Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html
        lang="en"
        className={`
          relative font-mulish
          ${lora.variable} 
          ${mulish.variable} 
          `}
      >
        <body className={"text-para bg-bg_para transition-all duration-300"}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
