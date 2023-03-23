import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/se-club-logo.svg";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import Container from "./Container";

export default function Header() {
  return (
    <nav className="fixed w-full bg-gray-100 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90 py-2 z-40">
      <Container>
        <div className="flex items-center justify-end">
          <div className="mr-auto">
            <Link href="/">
              <Image src={logo} alt="SE logo" className="h-14 lg:h-20 w-auto" />
            </Link>
          </div>
          <ul className="flex gap-6">
            <li>
              <Link target="_blank" href="https://t.me/+X4JeF8fG_NlkMWY0">
                <FaTelegramPlane className="text-black text-xl" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://twitter.com/SEclub_upm">
                <FiTwitter className="text-black text-xl" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.instagram.com/seclub_upm">
                <FiInstagram className="text-black text-xl" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://github.com/theSEClub/ramadan.seclub.io"
              >
                <FiGithub className="text-black text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
