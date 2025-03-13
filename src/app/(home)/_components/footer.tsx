import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="wrapper bg-[#0D2156] text-white px-4 py-8 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <Image
            src="/img/logo/secondary.png"
            alt="Logo"
            className="mr-1"
            width={150}
            height={150}
          />
          <p className="text-sm mt-5">
            Coptera Career adalah informasi lowongan kerja dan <br />
            tips &amp; trik untuk pengembangan karir.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <Instagram className="h-6 w-6" />
            <Facebook className="h-6 w-6" />
            <Mail className="h-6 w-6" />
            <Phone className="h-6 w-6" />
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <h2 className="font-semibold">Sitemap</h2>
          <Separator className="border-[#FFC00B] border-[1px] my-4" />
          <div className="flex flex-col gap-4">
            <Link className="text-sm" href="/job">
              Lowongan Kerja
            </Link>
            <Link className="text-sm" href="/accelelator">
              Career Accelelator
            </Link>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <h2 className="font-semibold">Contact Info</h2>
          <Separator className="border-[#FFC00B] border-[1px] my-4" />
          <div className="flex flex-col gap-4">
            <Link className="text-sm flex items-center gap-2" href="#">
              <Phone className="ml-2 h-4 w-4" /> +85893479859
            </Link>
            <Link className="text-sm flex items-center gap-2" href="#">
              <Mail className="ml-2 h-4 w-4" /> coptera.career@gmail.com
            </Link>
            <Link className="text-sm flex items-center gap-2" href="#">
              <MapPin className="ml-2 h-4 w-4" /> JL. Sekelimus Bandung No 24
            </Link>
          </div>
        </div>
      </div>

      <h5 className="text-sm pt-12 text-center">
        Copyright 2023 • All rights reserved • Coptera
      </h5>
    </div>
  );
};

export default Footer;
