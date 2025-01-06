"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-100 shadow-md backdrop-blur-md bg-opacity-50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo/alternatife-2.png"
              alt="Coptera Career"
              width={180}
              height={100}
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <Link
              href="/"
              className={`${
                isScrolled ? "text-blue-700" : "text-base-black"
              } hover:opacity-80`}
            >
              Home
            </Link>
            <Link
              href="/kelas-event"
              className={`${
                isScrolled ? "text-gray-700" : "text-base-black"
              } hover:opacity-80`}
            >
              Kelas
            </Link>
            <Link
              href="/career-accelerator"
              className={`${
                isScrolled ? "text-gray-700" : "text-text-[rgba(25, 13, 48, 1)]"
              } hover:opacity-80`}
            >
              Career Accelerator
            </Link>
            {/* CTA Button */}
            <Button variant={"brand"}>Komunitas Loker →</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
