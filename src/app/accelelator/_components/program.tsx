import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const PelatihanSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-blue-900 leading-snug mb-4 text-center">
          Program Unggulan Pelatihan <br />
          Sampai <span className="text-green-600">Dapat Kerja</span>
        </h2>
        <p className="text-gray-700 text-lg mb-6 text-center font-medium">
          Kami Bimbing sampai dapat kerja dengan portofolio <br /> real case
          project, Biaya bisa dicicil.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-8">
        <p className="text-blue-600 font-semibold mb-6">
          #BukanMenyalurkanTapiMembimbing
        </p>
      </div>
      <div className="max-w-6xl bg-base-blue text-white p-8 rounded-[1rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Kiri: Informasi Text */}
        <div>
          {/* Tentang Program */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold ">Tentang Program</h3>
            <p className="mb-4">
              Disini kamu akan akan dibimbing menjadi spesialist dibidang yang
              di pilih hingga mendapatkan pekerjaan.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2" />
                Mengerjakan real case project client dengan hasil yang bisa jadi
                portofolio.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2" />
                Sesi checkpoint dan bimbingan mingguan bersama tutor expert.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2" />
                Simulasi & Pelatihan Wawancara Kerja. Dibantu mengerjakan tes.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2" />
                Dukungan Hingga Mendapatkan Pekerjaan.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2" />
                Materi up-to-date & tidak ada biaya tambahan.
              </li>
            </ul>
          </div>

          {/* Harga */}
          <div className="text-left">
            <div className="flex gap-4">
              <p className="text-3xl font-bold  mb-2">Rp 999.000</p>
              <p className=" line-through text-lg">Rp 1.500.000</p>
            </div>
            <Button className="mt-4 bg-white hover:bg-white text-base-blue w-full md:w-auto">
              Coming Soon
            </Button>
          </div>
        </div>

        {/* Kanan: Full Gambar */}
        <div className="relative">
          <div className="relative w-full h-[500px] rounded-[2rem] mt-[-6rem] overflow-hidden shadow-lg">
            <Image
              src="/img/product3.png" // Ganti dengan gambar Anda
              alt="Program Pelatihan"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PelatihanSection;
