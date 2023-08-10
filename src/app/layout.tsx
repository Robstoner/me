import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schmidt Robert - Portfolio",
  description: "Personal website of Robert Schmidt",
};

const nav = [
  { name: "Home", href: "/" },
  { name: "History", href: "/history" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
  { name: "Playground", href: "/playground" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          poppins.className,
          "bg-white dark:bg-black text-black dark:text-white"
        )}
      >
        <Navbar menuItems={nav} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
