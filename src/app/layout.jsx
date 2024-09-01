import Navbar from "@/components/Navbar";
import "./globals.scss";
import { ThemeProvider } from "@/contexts/Theme";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
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

export const HtmlComment = ({ text }) => {
  const html = `<!-- ${text} -->`;
  const callback = (instance) => {
    if (instance) {
      instance.outerHTML = html;
    }
  };
  return (
    <script
      ref={callback}
      type="text/comment"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className={`${poppins.className} relative`}>
        <body
          className={
            "min-h-screen bg-primary_light text-primary_dark transition-colors duration-500"
          }
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
