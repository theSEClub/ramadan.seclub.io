import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import YourSchedule from "../components/Schedule/YourSchedule";
import styles from "@/styles/Home.module.css";
import background from "../assets/bg.svg";
import localFont from "next/font/local";

const sans = localFont({
  src: [
    {
      path: "../assets/the-sans-arabic-regular.ttf",
      weight: "400",
      style: "normal",
      display: "swap",
    },
    {
      path: "../assets/the-sans-arabic-bold.ttf",
      weight: "700",
      style: "normal",
      display: "swap",
    },
    {
      path: "../assets/the-sans-arabic-light.ttf",
      weight: "300",
      style: "normal",
      display: "swap",
    },
  ],
});

export default function Home() {
  return (
    <>
      <div className={`overflow-hidden relative font-body ${sans.className}`}>
        <Image
          src={background}
          alt="calendar"
          className="main-image col-start-1 w-screen h-auto absolute top-0 left-0 z-[-1]"
        />
        <Header />
        <Main />
        <YourSchedule />
        <Footer />
      </div>
    </>
  );
}
