import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const CareerSections: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Section 1: Cerita Sukses Alumni */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Cerita sukses alumni Coptera Career
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Testimoni real program kami ikuti jejak karir mereka.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Program Unggulan",
              "Bootcamp",
              "Program Unggulan",
              "Webinar",
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src="/img/testimoni1.png" // Ganti dengan gambar testimonial Anda
                    alt={program}
                    layout="fill"
                    objectFit="cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    {program}
                  </Badge>
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-md font-bold text-center">Putri Azkia</h3>
                  <p className="text-sm text-gray-600 text-center font-semibold">
                    Program Product & Project Management
                  </p>
                  <p className="text-xs text-gray-500 text-center font-regular mt-2">
                    Sekarang putri udah keterima kerja di salah satu startup
                    indonesia yaitu Gojek sebagai Associate Product Manager.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="#"
                      className="text-blue-600 text-xs mt-2 inline-block text-center"
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Konsultasi Karir */}
      <section className="py-24 my-10  relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 text-white md:grid-cols-2 items-center p-10 rounded-[1rem] bg-base-blue">
          <div>
            <h2 className="text-3xl font-bold  mb-4">
              Masih Ada Keraguan? Konsultasi Langsung
            </h2>
            <p className="text-lg mb-8">
              Kalau kamu masih ragu atau masih bingung, yuk konsultasi secara
              Google Meet dengan kami.
            </p>
            <Button className="bg-white text-base-blue ">
              Konsultasikan Sekarang
            </Button>
          </div>
          <Image
            src="/img/cta.png" // Ganti dengan gambar konsultasi Anda
            alt="Konsultasi Karir"
            width={400}
            height={400}
            className="absolute top-1/2 right-[24rem] transform -translate-y-1/2"
          />
        </div>
      </section>

      {/* Section 3: FAQ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Apa itu Coptera Career?",
                "Apa beda nya program unggulan & Bootcamp?",
                "Apakah ada penyaluran kerja?",
                "Berapa lama program unggulan?",
                "Bisakah daftar lebih dari 1 event sekaligus?",
                "Cara kolaborasi?",
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="shadow-sm p-2 px-4 rounded-md"
                >
                  <AccordionTrigger>{faq}</AccordionTrigger>
                  <AccordionContent>
                    Ini adalah jawaban dari pertanyaan.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </div>
      </section>

      {/* Section 4: Kesempatan Menjadi Mentor */}
      <section className="py-16 ">
        <div
          className="max-w-6xl bg-gray-600 text-white p-10 rounded-[1rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            backgroundImage: "url(/img/figma-assets/cta.png)",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Kesempatan Emas untuk Berbagi!
            </h2>
            <p className="text-lg mb-6">
              Jadi mentor dan bantu generasi baru berkembang.
            </p>
            <Button className="bg-white text-base-blue">Yu Hubungi Kami</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerSections;
