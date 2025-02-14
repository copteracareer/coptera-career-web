import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Folder } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const DetailPage = () => {
  const benefits = [
    {
      title: "Portfolio Profesional",
      description:
        "Studi kasus nyata yang akan menarik perhatian HR dan klien.",
    },
    {
      title: "Keterampilan Baru",
      description:
        "Penguasaan AI tools yang relevan untuk desain UI/UX modern.",
    },
    {
      title: "Mentoring Eksklusif",
      description:
        "Diskusi langsung dengan mentor ahli untuk feedback dan pengembangan.",
    },
    {
      title: "Sertifikat Kelulusan",
      description:
        "Sebagai bukti kompetensi yang dapat ditambahkan ke LinkedIn atau CV.",
    },
    {
      title: "Review CV dan Portfolio Career Path",
      description: "",
    },
  ];

  const learningPoints = [
    "Mempelajari konsep desain UI/UX modern.",
    "Mendalami penggunaan AI untuk mempercepat proses desain.",
    "Mengaplikasikan ilmu dengan studi kasus nyata.",
    "Membangun portfolio desain yang menarik untuk HR dan klien.",
  ];

  const weeklyContent = [
    {
      week: 1,
      title: "Dasar-Dasar UI/UX Design",
      topics: [
        "Prinsip dasar desain UI/UX (design thinking, user-centered design).",
        "Pengenalan tools utama seperti Figma dan Miro.",
        "Riset pengguna dan analisis kebutuhan proyek.",
      ],
    },
    {
      week: 2,
      title: "Mendesain dengan Bantuan AI",
      topics: [
        "Pemanfaatan AI untuk wireframing, ideasi desain, dan pengembangan prototipe.",
        "Automasi desain menggunakan AI tools seperti ChatGPT, MidJourney, atau Galileo AI.",
        "Optimasi alur kerja desain untuk efisiensi dan efektivitas.",
      ],
    },
    {
      week: 3,
      title: "Praktik Real Case Study",
      topics: [
        "Studi kasus pembuatan desain website (misalnya: e-commerce, portal berita).",
        "Studi kasus desain aplikasi mobile (misalnya: aplikasi reservasi, edukasi).",
        "Proses end-to-end: wireframe, mockup, hingga high-fidelity prototype.",
      ],
    },
    {
      week: 4,
      title: "Membangun Portofolio Profesional",
      topics: [
        "Dokumentasi dan storytelling dari hasil studi kasus.",
        "Tips menampilkan desain yang menarik untuk HR dan klien.",
        "Finalisasi portofolio siap presentasi.",
      ],
    },
  ];

  const outcomes = [
    "Portofolio Profesional: Studi kasus nyata yang akan menarik perhatian HR dan klien.",
    "Keterampilan Baru: Penguasaan AI tools yang relevan untuk desain UI/UX modern.",
    "Mentoring Eksklusif: Diskusi langsung dengan mentor ahli untuk feedback dan pengembangan.",
    "Sertifikat Kelulusan: Sebagai bukti kompetensi yang dapat ditambahkan ke LinkedIn atau CV.",
  ];

  const programDetails = {
    duration: "4 Minggu (12 sesi live + video rekaman)",
    format: [
      "Sesi Live via Zoom.",
      "Materi Video On-Demand.",
      "Tugas Praktik Setiap Minggu.",
    ],
    mentoring: "Diskusi mingguan dengan mentor UI/UX berpengalaman.",
    tools: {
      design: ["Figma", "Miro", "FigJam"],
      ai: ["AI Tools: ChatGPT, Galileo AI, dan lainnya."],
    },
  };

  const targetAudience = [
    "Pemula yang ingin berkarir di UI/UX Design.",
    "Designer yang ingin mendalami AI dalam proses desain.",
    "Profesional yang ingin membangun portofolio yang menarik.",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-no-repeat bg-center bg-cover py-16 px-4 md:px-8 lg:px-16"
        style={{ backgroundImage: `url('/img/product1.png')` }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex gap-2">
                <Badge variant={"brand-primary"}>Bootcamp</Badge>
                <Badge variant={"brand-orange"}>UI/UX Design</Badge>
              </div>
              <h1 className="text-4xl font-bold my-4">
                UI/UX Design AI: Design Website dan Aplikasi real case study
              </h1>
              <p className="font-medium mb-6 text-gray-500">
                kuasai UI/UX Design menjadi salah satu keahlian yang paling
                dicari di industri teknologi dimasa AI sekaang dengan pelatihan
                insentive 1 bulan
              </p>
              <Badge variant={"danger"}>Promo Terbatas</Badge>
              <div className="flex items-center gap-4">
                <h2 className="text-3xl text-red-500 font-bold">Rp. 199.000</h2>
                <p className="font-semibold text-gray-500 text-2xl line-through">
                  Rp. 399.000
                </p>
              </div>
              <Button className="w-full mt-6" variant={"brand"} size={"lg"}>
                Daftar Sekarang
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/img/webinar.png"
                alt="UI/UX Design AI"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Tentang Bootcamp Coptera Career
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Belajar mendesain website dan aplikasi dengan pendekatan real case
              study, dipadukan dengan teknologi terkini berbasis AI. Program ini
              dirancang untuk mencetak desainer UI/UX yang siap kerja dan
              memiliki portfolio profesional.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Program ini dirancang khusus untuk kamu yang ingin memperdalam
              keterampilan UI/UX Design menggunakan teknologi terkini, termasuk
              tools berbasis AI. Selama satu bulan, kamu akan:
            </p>

            <ul className="space-y-3 pl-6">
              {learningPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Benefit dengan fasilitas buat raih karir impian mu
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-2 border-blue-100 hover:border-blue-200 transition-colors"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="mt-1">
                      <Folder className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {benefit.title}
                      </h3>
                      {benefit.description && (
                        <p className="text-gray-600">{benefit.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* What You'll Learn Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Apa yang Akan Kamu Pelajari?
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {weeklyContent.map((week, index) => (
                <AccordionItem
                  key={index}
                  value={`week-${index}`}
                  className="border rounded-lg px-6 py-2 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold">
                      {week.title} (Minggu {week.week})
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 mt-2">
                      {week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* What You'll Get Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Apa yang Kamu Dapatkan?</h2>
            <ul className="space-y-3">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Details Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Detail Program</h2>
            <Card className="bg-gray-50">
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="mb-2">• Durasi: {programDetails.duration}</p>
                  <p className="mb-2">• Format Kelas:</p>
                  <ul className="pl-6 space-y-1">
                    {programDetails.format.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2">
                    • Mentoring: {programDetails.mentoring}
                  </p>
                  <p className="mb-2">• Tools yang Digunakan:</p>
                  <ul className="pl-6 space-y-1">
                    <li>• {programDetails.tools.design.join(", ")}</li>
                    <li>• {programDetails.tools.ai}</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Target Audience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Siapa yang Cocok Mengikuti?
            </h2>
            <ul className="space-y-3">
              {targetAudience.map((audience, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full inline-block"></span>
                  <span>{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailPage;
