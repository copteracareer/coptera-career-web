import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-base-white min-h-screen flex items-center">
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-md font-semibold text-base-green mb-4">
            #RaihKarirImpianmu
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-base-blue leading-tight mb-6">
            Achieve your dream <span className="text-yellow-400">career</span>{" "}
            with us!
          </h1>
          <p className="text-lg text-base-black mb-6">
            Persiapkan diri untuk karir impian yang sudah lama menunggu.
            Waktunya berubah, waktunya melangkah!
          </p>
          <Button size="lg" variant={"brand"}>
            Belajar Sekarang
          </Button>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Main Image */}
          <Image
            src="/img/hero-img.png"
            alt="Professional woman"
            width={1500}
            height={1500}
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
