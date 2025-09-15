import Image from "next/image";

const Partner = () => {
  const partners = [
    {
      id: 1,
      name: "CV Kreasi Nusa Warna (Goods Project)",
      image: "/img/logo/partner/goods-project.jpeg",
    },
    {
      id: 2,
      name: "PT Ina Nata Boga (Ina Cookies)",
      image: "/img/logo/partner/ina-nata-boga.jpeg",
    },
    {
      id: 3,
      name: "PT Bersama Zatta Jaya Tbk",
      image: "/img/logo/partner/elcorps.png",
    },
    {
      id: 4,
      name: "Reference Job",
      image: "/img/logo/partner/references.png",
    },
    {
      id: 5,
      name: "PT Air Box Personalia",
      image: "/img/logo/partner/abp.jpg",
    },
    {
      id: 6,
      name: "PT Mitra Ekspedisi Jawa",
      image: "/img/logo/partner/mej.png",
    },
    {
      id: 7,
      name: "PT FOLKA INDONESIA TEKNOLOGI",
      image: "/img/logo/partner/folkatech.jpg",
    },
    {
      id: 8,
      name: "UIUXINDO Academy",
      image: "/img/logo/partner/uiuxindo.jpeg",
    },
  ];

  const row1 = partners.slice(0, Math.ceil(partners.length / 2));
  const row2 = partners.slice(Math.ceil(partners.length / 2));

  const repeat = (arr: typeof partners, times = 4) =>
    Array(times).fill(arr).flat();

  return (
    <div className="wrapper bg-[#DBEAFE] px-4 py-[46px] sm:px-10 lg:px-20">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <p className="font-semibold text-[#155DFC] text-base md:text-lg lg:text-xl text-center">
          Perusahaan yang telah pasang loker disini
        </p>
        {/* Row 1 → moving right */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right space-x-6">
            {repeat(row1).map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center p-5 w-40 h-[85px] bg-[rgba(245,245,245,0.6)] border border-white/70 backdrop-blur-[17.5px] rounded-[10px]"
              >
                <div
                  className="w-full h-full bg-contain bg-no-repeat bg-center opacity-85"
                  style={{ backgroundImage: `url(${partner.image})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 → moving left */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-left space-x-6">
            {repeat(row2).map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center p-5 w-40 h-[85px] bg-[rgba(245,245,245,0.6)] border border-white/70 backdrop-blur-[17.5px] rounded-[10px]"
              >
                <div
                  className="w-full h-full bg-contain bg-no-repeat bg-center opacity-85"
                  style={{ backgroundImage: `url(${partner.image})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
