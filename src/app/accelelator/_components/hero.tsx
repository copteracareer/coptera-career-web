import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-base-white min-h-screen flex items-center">
      {/* Gradient Circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-300/40 via-blue-200/40 to-blue-100/30 blur-2xl" />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-emerald-300/40 via-green-200/40 to-blue-200/30 blur-2xl" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-rose-300/40 via-pink-200/40 to-rose-100/30 blur-2xl" />

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
          <p className="text-lg text-base-black font-semibold mb-6">
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
            src="/img/figma-assets/hero.png"
            alt="Professional woman"
            width={600}
            height={600}
            className="z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
