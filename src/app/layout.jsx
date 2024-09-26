import Navbar from "@/components/Navbar";
import "./globals.scss";
import { ThemeProvider } from "@/contexts/Theme";
import { Oxygen, Syne } from "next/font/google";
import Footer from "@/components/Footer";

const mulish = Oxygen({
  weight: ["300", "400", "700"],
  variable: "--font-mulish",
  subsets: ["latin"],
});
const syne = Syne({
  variable: "--font-syne",
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
          ${mulish.variable} 
          ${syne.variable}
          `}
      >
        <body className={"gradient text-color_front bg-para_bg min-h-svh"}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
