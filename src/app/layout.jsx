import Navbar from "@/components/Navbar";
import "./globals.scss";
import { ThemeProvider } from "@/contexts/Theme";
import { Lora, Mulish } from "next/font/google";
import Footer from "@/components/Footer";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const lora = Lora({
  variable: "--font-lora",
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
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/theme-toggles@4.10.1/css/expand.min.css"
          />
        </head>
        <body
          className={
            "text-para transition-colors duration-300 bg-bg_radial_darkblue"
          }
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
