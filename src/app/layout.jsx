import "./globals.scss";
import { ThemeProvider } from "@/contexts/Theme";
import { Poppins } from "next/font/google";
import Navbar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

const poppins = Poppins({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MountAbuAgroProducts Inc.",
  description:
    "MountAbuAgroProducts Inc. is a food wholesaler startup specializing in nutruicius and tasty food for medium-sized businesses and buyers.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className={`${poppins.className} relative`}>
        <body className={"min-h-screen"}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
