"use client";
import React from "react";
import Navbar from "./_components/navbar";
import HeroSection from "./_components/hero";
import ProductSection from "./_components/product";
import ClassSection from "./_components/classes";
import TestimonialSection from "./_components/testimonial";
import Footer from "../(home)/_components/footer";
import MentorSection from "./_components/mentor";
import PelatihanSection from "./_components/program";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="min-h-screen">
        {/* Hero Section */}
        <Navbar />
        <HeroSection />
        {/* Why choose us */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-center text-3xl font-bold mb-10">
              Kenapa Persiapan karir di coptera?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.map((item, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardHeader>
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5.121 19a1.5 1.5 0 001.415-1.414M19 19a1.5 1.5 0 001.415-1.414M16 12.5a2.5 2.5 0 11-5 0m5 0h-5m10.5 0A10.5 10.5 0 0012 2.5m0 0a10.5 10.5 0 00-10.5 10m21 0a10.5 10.5 0 01-10.5 10m0 0a10.5 10.5 0 01-10.5-10"
                        />
                      </svg>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pilihan Program copcareer
              </h2>
              <p className="text-gray-600 mb-8">
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
                    key={index}
                    className="bg-gray-300 rounded-xl shadow-md min-w-[300px] max-w-[300px] flex-shrink-0 overflow-hidden"
                  >
                    {/* Placeholder Gambar */}
                    <div className="bg-gray-300 h-48 w-full flex items-center justify-center text-gray-600">
                      <span className="text-sm font-semibold">No Image</span>
                    </div>
                    <div className="p-4 bg-white m-2 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {program.description}
                      </p>
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
        <Footer />
      </div>
    </>
  );
};

export default AcceleratorPage;
