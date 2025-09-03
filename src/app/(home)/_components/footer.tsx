import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="wrapper bg-[#0D2156] text-white px-4 py-[45px] sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <Image
            src="/img/logo/brand-new.png"
            alt="Logo"
            className="mr-1"
            width={211}
            height={34}
          />
          <p className="text-sm mt-3">
            Coptera Career adalah informasi lowongan kerja dan <br />
            tips &amp; trik untuk pengembangan karir.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://www.instagram.com/copteracareer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/icon/Instagram.png"
                alt="icon instagram"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/coptera"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/icon/LinkedIn.png"
                alt="icon linkedin"
                className="h-6 w-6"
              />
            </a>
            <a
              href="https://www.tiktok.com/@copteracareer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/img/icon/Tiktok.png"
                alt="icon tiktok"
                className="h-[26px] w-[26px]"
              />
            </a>
            {/* <Instagram className="h-6 w-6" />
            <Facebook className="h-6 w-6" />
            <Mail className="h-6 w-6" />
            <Phone className="h-6 w-6" /> */}
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <h2 className="font-semibold text-xl">Sitemap</h2>
          <Separator className="border-[#FFC00B] border-[1px] my-4" />
          <div className="flex flex-col gap-3">
            <Link className="flex flex-row space-x-2 text-sm" href="/job">
              <div className="h-6 w-6 flex items-center">
                <img
                  src="/img/icon/arrow-list.png"
                  alt="arrow list"
                  className="h-3 w-1.5 m-auto"
                />
              </div>
              <span>Lowongan Kerja</span>
            </Link>
            <Link
              className="flex flex-row space-x-2 text-sm"
              href="/home#testimoni"
            >
              <div className="h-6 w-6 flex items-center">
                <img
                  src="/img/icon/arrow-list.png"
                  alt="arrow list"
                  className="h-3 w-1.5 m-auto"
                />
              </div>
              <span>Testimoni</span>
            </Link>
            <Link
              className="flex flex-row space-x-2 text-sm"
              href="https://docs.google.com/forms/d/e/1FAIpQLScVno-V3SmCtFhlHekuSuSHUuAy2sx1AaD6Oswh8OR0QXxozA/viewform?usp=preview"
              target="_blank"
            >
              <div className="h-6 w-6 flex items-center">
                <img
                  src="/img/icon/arrow-list.png"
                  alt="arrow list"
                  className="h-3 w-1.5 m-auto"
                />
              </div>
              <span>Komunitas</span>
            </Link>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <h2 className="font-semibold text-xl">Contact Information</h2>
          <Separator className="border-[#FFC00B] border-[1px] my-4" />
          <div className="flex flex-col gap-3">
            <a className="text-sm flex flex-row gap-3" href="#">
              <img
                src="/img/icon/i-maps.png"
                alt="icon maps"
                className="h-5 w-5"
              />
              <span>
                Jl. Padjajaran Dalam 2 No.1, RT 03 RW 03, Husein Sastranegara,
                Kec. Cicendo, Kota Bandung, Jawa Barat 40174
              </span>
            </a>
            {/* <Link className="text-sm flex flex-row items-center gap-3" href="#">
              <img
                src="/img/icon/i-web.png"
                alt="icon web"
                className="h-5 w-5"
              />
              <span>https://copteracareer.co.id</span>
            </Link> */}
            <a
              className="text-sm flex flex-row items-center gap-3"
              href="https://wa.me/6285893479859"
            >
              <img
                src="/img/icon/i-phone.png"
                alt="icon phone"
                className="h-5 w-5"
              />
              <span>0858-9347-9859</span>
            </a>
            <a
              className="text-sm flex flex-row items-center gap-3"
              href="mailto:coptera.career@gmail.com"
            >
              <img
                src="/img/icon/i-mail.png"
                alt="icon mail"
                className="h-5 w-5"
              />
              <span>coptera.career@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* <h5 className="text-sm pt-12 text-center">
        Copyright 2023 • All rights reserved • Coptera
      </h5> */}
    </div>
  );
};

export default Footer;
