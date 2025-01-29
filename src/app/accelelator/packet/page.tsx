import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, icons } from "lucide-react";
import Link from "next/link";

const PacketPage = () => {
  const services = [
    {
      title: "Review CV & Surat Lamaran",
      description:
        "Dapatkan review langsung dari HR berpengalaman, template CV ATS dan kreatif, serta tips memperbaiki resume dan surat lamaran.",
      icon: "/img/figma-assets/icon(1).png",
    },
    {
      title: "Simulasi Wawancara HR",
      description:
        "Nikmati pengalaman 1 on 1 wawancara dengan HR, dapatkan tips & trik wawancara, dan jadilah lebih percaya diri saat menjawab pertanyaan HR!",
      icon: "/img/figma-assets/icon(2).png",
    },
    {
      title: "Simulasi Wawancara User",
      description:
        "Rasakan serunya 1 on 1 wawancara dengan user, langsung hadapi pertanyaan dari mereka, dan dapatkan tips menjawab pertanyaan user dengan percaya diri!",
      icon: "/img/figma-assets/icon(2).png",
    },
    {
      title: "Tips Tes Teknis & Studi Kasus",
      description:
        "Temukan contoh studi kasus untuk posisi yang kamu lamar dan pelajari cara menjawabnya dengan efektif dan mudah.",
      icon: "/img/figma-assets/icon.png",
    },
  ];

  const singlePricing = [
    {
      title: "Review CV & Surat Lamaran",
      description:
        "Peningkatan lamaran kerja dengan review CV, template CV, dan tips.",
      price: "25.000",
      popular: false,
    },
    {
      title: "Simulasi Wawancara HR",
      description:
        "Peningkatan lamaran kerja dengan simulasi HR, template CV, dan tips.",
      price: "25.000",
      popular: true,
    },
    {
      title: "Simulasi Wawancara User",
      description:
        "Peningkatan lamaran kerja dengan simulasi user, template CV, dan tips.",
      price: "25.000",
      popular: false,
    },
    {
      title: "Tips Tes Teknis & Studi Kasus",
      description:
        "Peningkatan lamaran kerja dengan tips tes teknis, template CV, dan tips.",
      price: "25.000",
      popular: false,
    },
  ];

  const packagePricing = [
    {
      packet: "Paket Kelas Akses",
      title: "Review CV dan Simulasi Interview",
      description:
        "Semua layanan dalam satu paket: Review CV, Simulasi HR, Simulasi User, dan Tips Tes Teknis.",
      price: "100.000",
      popular: false,
    },
    {
      packet: "Paket Siap Interview",
      title: "Simulasi Interview HR dan Interview User",
      description:
        "Semua layanan dalam satu paket: Review CV, Simulasi HR, Simulasi User, dan Tips Tes Teknis.",
      price: "100.000",
      popular: true,
    },
    {
      packet: "Paket Kelas Akses",
      title: "Paket All in One",
      description:
        "Semua layanan dalam satu paket: Review CV, Simulasi HR, Simulasi User, dan Tips Tes Teknis.",
      price: "100.000",
      popular: false,
    },
  ];

  const steps = [
    {
      title: "Mengisi Formulir",
      description: "Isi formulir pendaftaran dengan informasi pribadi Anda.",
    },
    {
      title: "Memesan Jadwal",
      description:
        "Pilih jadwal yang tersedia sesuai dengan waktu yang Anda inginkan.",
    },
    {
      title: "Pembayaran",
      description: "Lakukan pembayaran untuk mengonfirmasi pendaftaran Anda.",
    },
    {
      title: "Buat Jadwal",
      description: "Atur jadwal bimbingan sesuai ketersediaan Anda dan mentor.",
    },
    {
      title: "Mulai Bimbingan",
      description:
        "Mulai sesi bimbingan Anda dan tingkatkan keterampilan karier Anda.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12">
      <div className="mx-auto">
        {/* about us */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[95rem] mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              {/* Konten di Kiri */}
              <div className="lg:w-1/2">
                <h2 className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
                  TENTANG KAMI
                </h2>
                <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Apa itu Coptera Career Accelerator?
                </h1>
                <p className="mt-4 font-medium text-gray-400">
                  Coptera Career Accelerator membantu kamu tampil memukau dengan
                  CV yang standout dan latihan interview seru yang bikin percaya
                  diri melesat.
                </p>
                <div className="mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Lihat Layanan
                  </Button>
                </div>
              </div>

              {/* Gambar di Kanan */}
              <div className="mt-10 lg:mt-0 lg:w-1/2 lg:flex lg:justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gray-300 rounded-[2rem]">
                  <Image
                    src="/img/product2.png"
                    alt="Coptera Career Accelerator"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* services  */}
        <div className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-sm font-bold sm:text-xs">LAYANAN KAMI</h1>
              <p className="mt-4 text-3xl font-bold">
                Ada apa saja di Coptera Career Accelerator?
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt="Coptera Career Accelerator"
                        width={50}
                        height={50}
                        className="rounded-full bg-gray-300"
                      ></Image>
                    </div>
                    <CardTitle className="text-xl font-bold text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* price */}
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
                HARGA
              </h2>
              <p className="mt-4 font-bold text-3xl">
                Temukan Paket yang Cocok untuk Kamu!
              </p>
              <p className="mt-4 text-gray-400 font-medium">
                Jelajahi paket seru untuk karir kamu! dari review CV hingga
                semilasi wawancara, pilih paket terbaik dan <br /> wujudkan
                impianmu dengan Coptera Career!
              </p>
            </div>

            <div className="mt-10">
              <Tabs defaultValue="single">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="single">Harga Satuan</TabsTrigger>
                  <TabsTrigger value="package">Harga Paket</TabsTrigger>
                </TabsList>
                <TabsContent value="single">
                  <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {singlePricing.map((service, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow duration-300 relative"
                      >
                        {service.popular && (
                          <div className="absolute top-[-16px] right-0 rounded-t-xl font-semibold text-center bg-yellow-500 text-white px-2 py-1 w-full">
                            Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="text-lg font-bold">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-400 font-semibold">
                            {service.description}
                          </CardDescription>
                          <div className="mt-4 flex items-center gap-2">
                            <p className="font-bold text-gray-400">Rp 50.000</p>
                            <Badge variant={"danger"}>Diskon 50%</Badge>
                          </div>
                          <div className="flex gap-2 items-end">
                            <p className="text-xs text-gray-400">Rp.</p>
                            <p className="text-4xl mt-4 font-bold text-gray-900">
                              {service.price}
                            </p>
                          </div>
                          <Button className="w-full my-4" variant={"brand"}>
                            Pilih Paket
                          </Button>
                          <Separator />
                          <ul className="text-gray-500 font-semibold text-sm flex flex-col gap-2 mt-4">
                            <li className="flex items-center gap-2">
                              <Check className="text-yellow-500 w-4" />
                              Evaluasi oleh HR Berpengalaman
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="text-yellow-500 w-4" />
                              Template CV Menarik
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="text-yellow-500 w-4" />
                              Tips Perbaikan
                            </li>
                            <Link
                              className="text-blue-500 text-center my-4"
                              href="#"
                            >
                              Lihat Selengkapnya
                            </Link>
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="package">
                  <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {packagePricing.map((service, index) => (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow duration-300 relative"
                      >
                        {service.popular && (
                          <div className="absolute top-[-16px] right-0 rounded-t-xl font-semibold text-center bg-yellow-500 text-white px-2 py-1 w-full">
                            Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="p-2 rounded-lg text-center bg-blue-500 text-white font-bold">
                            {service.packet}
                          </CardTitle>
                          <CardTitle className="text-lg font-bold">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-400 font-semibold">
                            {service.description}
                          </CardDescription>
                          <div className="mt-4 flex items-center gap-2">
                            <p className="font-bold text-gray-400">Rp 50.000</p>
                            <Badge variant={"danger"}>Diskon 50%</Badge>
                          </div>
                          <div className="flex gap-2 items-end">
                            <p className="text-xs text-gray-400">Rp.</p>
                            <p className="text-4xl mt-4 font-bold text-gray-900">
                              {service.price}
                            </p>
                          </div>
                          <Button className="w-full my-4" variant={"brand"}>
                            Pilih Paket
                          </Button>
                          <Separator />
                          <ul className="text-gray-500 font-semibold text-sm flex flex-col gap-2 mt-4">
                            <li className="flex items-center gap-2">
                              <Check className="text-yellow-500 w-4" />
                              Evaluasi oleh HR Berpengalaman
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="text-yellow-500 w-4" />
                              Template CV Menarik
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="text-yellow-500 w-4" />
                              Tips Perbaikan
                            </li>
                            <Link
                              className="text-blue-500 text-center my-4"
                              href="#"
                            >
                              Lihat Selengkapnya
                            </Link>
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* flow */}
        <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg font-semibold uppercase">
              Alur Pendaftaran
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Mulai Perjalanan Karirmu Bersama Kami!
            </h1>
            <p className="mt-4 text-gray-200">
              Mulailah perjalanan karirmu dengan mendaftar dan memilih paket
              layanan sesuai kebutuhanmu untuk meraih perubahan positif dalam
              karirmu!
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="w-2 h-2 bg-white rounded-full mb-4"></span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-2 rounded-lg font-semibold">
              Daftar Sekarang
            </Button>
          </div>
        </section>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Stop Menunda Karier Impianmu!
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Bergabunglah dengan Coptera Career Accelerator sekarang juga.
          </p>
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PacketPage;
