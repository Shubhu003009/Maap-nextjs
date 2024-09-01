import Navbar from "@/components/Navbar";
import "./globals.scss";
import { ThemeProvider } from "@/contexts/Theme";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MountAbuAgroProducts",
  description:
    "MountAbuAgroProducts is a wholesaler brand which deals with agricultrual products.",
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
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        <body className={"min-h-screen bg-primary_light text-primary_dark"}>
          <Navbar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
