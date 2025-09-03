import Image from "next/image";

const PostJob = () => {
  return (
    <div className="wrapper bg-white px-4 py-[76.5px] sm:px-10 lg:px-20">
      <div className="flex flex-col items-center flex-col-reverse md:flex-row md:space-x-4 justify-between w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-6 lg:gap-[30px] w-full md:w-1/2">
          <div className="flex flex-col gap-5 lg:gap-[30px]">
            <h2 className="font-semibold text-[22px] lg:text-[28px] text-center md:text-left mt-4 md:mt-0">
              Posting Loker di Kita Gratis!
            </h2>
            <p className="font-normal text-sm md:text-base lg:text-lg text-center md:text-left">
              Mau pasang lowongan kerja tanpa ribet dan tanpa biaya?
              <br />
              Sekarang bisa! Cukup isi form yang tersedia dan loker Anda akan
              tayang untuk menjangkau ribuan pencari kerja aktif di seluruh
              Indonesia.
              <br />
              Caranya mudah: klik tombol di bawah, isi form nya, dan selesai
              loker Anda siap ditemukan kandidat terbaik.
              <br />
              <br />
              <b>Lebih simpel, lebih cepat, lebih tepat.</b>
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <button className="w-auto rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base lg:text-lg font-medium py-4 px-[50px]">
              <a
                href="https://S.id/copterapostingloker"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pasang Lowongan Gratis
              </a>
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <Image
            src="/img/figma-assets/PostJob.png"
            alt="Post a Job"
            className="rounded-[10px] w-full h-auto"
            width={512}
            height={377}
          />
        </div>
      </div>
    </div>
  );
};

export default PostJob;
