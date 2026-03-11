import React from "react";
import HeadComponent from "./HeadComponent";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const PageWrapper = ({ title, description, children }: PageWrapperProps) => {
  return (
    <>
      <HeadComponent title={title} description={description} />
      <Navbar />
      <main className={`${inter.variable}`}>{children}</main>
      <Footer />
    </>
  );
};

export default PageWrapper;
