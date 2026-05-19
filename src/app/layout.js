import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CursorGlow from "../components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ulindu Portfolio",
  description: "Modern software engineer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
