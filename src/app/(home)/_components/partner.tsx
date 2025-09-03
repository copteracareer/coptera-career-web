import Image from "next/image";

const Partner = () => {
  const partners = [
    {
      id: 1,
      name: "blibli",
      image: "/img/logo/partner/blibli.png",
    },
    {
      id: 2,
      name: "Google",
      image: "/img/logo/partner/google.png",
    },
    {
      id: 3,
      name: "tokopedia",
      image: "/img/logo/partner/tokopedia.png",
    },
    {
      id: 4,
      name: "gojek",
      image: "/img/logo/partner/gojek.png",
    },
  ];
  return (
    <div className="wrapper bg-[#DBEAFE] px-4 py-[46px] sm:px-10 lg:px-20">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <p className="font-semibold text-[#155DFC] text-base md:text-lg lg:text-xl text-center">
          Perusahaan yang telah pasang loker disini
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-5 gap-4 mx-auto w-full  h-[85px] bg-[rgba(245,245,245,0.6)] border border-white/70 backdrop-blur-[17.5px] rounded-[10px]"
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
  );
};

export default Partner;
