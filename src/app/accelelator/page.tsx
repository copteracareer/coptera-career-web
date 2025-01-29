"use client";
import React from "react";
import HeroSection from "./_components/hero";
import ProductSection from "./_components/product";
import ClassSection from "./_components/classes";
import TestimonialSection from "./_components/testimonial";
import MentorSection from "./_components/mentor";
import PelatihanSection from "./_components/program";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";
const AcceleratorPage = () => {
  const data = [
    {
      title: "Kelas Interaktif",
      description:
        "Belajar melalui sesi interaktif bersama para mentor berpengalaman. Topik yang kami ajarkan meliputi manajemen portofolio, strategi pencarian kerja, dan wawasan industri terkini.",
    },
    {
      title: "Materi Praktis & Relevan",
      description:
        "Setiap materi dirancang berdasarkan kebutuhan nyata di dunia kerja, sehingga Anda siap bersaing di pasar kerja lokal maupun internasional.",
    },
    {
      title: "Pendekatan Personal",
      description:
        "Kami memahami kebutuhan setiap individu berbeda. Itulah sebabnya kami menyediakan sesi mentoring personal untuk membantu Anda mencapai tujuan karier Anda.",
    },
    {
      title: "Harga Terjangkau",
      description:
        "Jangan lewatkan kesempatan! Harga terjangkau dengan bimbingan sampai kamu mendapatkan pekerjaan yang diinginkan.",
    },
  ];

  const programs = [
    {
      title: "Kelas & Event",
      description:
        "Ikuti berbagai kelas dan event menarik yang dirancang khusus...",
    },
    {
      title: "Bootcamp",
      description:
        "Program intensif untuk mempercepat pengembangan keterampilan...",
    },
    {
      title: "Career Accelerator",
      description:
        "Program yang dirancang untuk mempercepat perjalanan karir...",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Why choose us */}
      <div className="bg-gradient-brand py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-center text-3xl font-bold mb-10">
            Kenapa Persiapan karir di coptera?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <Card key={index} className="bg-white shadow-md">
                <CardHeader>
                  <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <User />
                  </div>
                  <CardTitle className="text-lg font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-medium text-sm text-gray-400">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* programs */}
      <div className="bg-gray-50 py-16 px-24">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Kiri: Teks dan Filter */}
          <div className="flex flex-col justify-center">
            <h2 className="text-6xl font-bold text-gray-800 mb-4">
              Pilihan Program <br /> copcareer
            </h2>
            <p className="text-gray-400 mb-8 font-semibold">
              Dapatkan Banyak Keuntungan untuk Karier Anda!
            </p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-100 text-base-blue border border-base-blue rounded-full">
                Kelas & Event
              </button>
              <button className="px-4 py-2 bg-blue-100 text-base-blue border border-base-blue rounded-full">
                Bootcamp
              </button>
              <button className="px-4 py-2 bg-blue-100 text-base-blue border border-base-blue rounded-full">
                Career Accelerator
              </button>
            </div>
          </div>

          {/* Kanan: Scrollable Cards */}
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200">
            <div className="flex space-x-6">
              {programs.map((program, index) => (
                <div
                  className="bg-white rounded-3xl shadow-lg min-w-[300px] max-w-[300px] flex-shrink-0 overflow-hidden"
                  key={index}
                >
                  <div className="relative">
                    <Image
                      src="/img/figma-assets/woman.png"
                      alt={program.title}
                      width={400}
                      height={200}
                      className="h-80 w-full object-cover"
                    />
                    {/* Card Content - Overlapping the image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 m-4 bg-white rounded-2xl shadow-md">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-400 font-semibold text-xs leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Products Section */}
      <ClassSection />
      <ProductSection />
      <MentorSection />
      <PelatihanSection />
      <TestimonialSection />
      {/* Footer */}
    </>
  );
};

export default AcceleratorPage;
