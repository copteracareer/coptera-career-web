import Image from "next/image";

const Testimoni = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lea",
      position: "Job Seeker",
      image: "/img/figma-assets/testimoni/lea.jpg",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. At nunc tincidunt rhoncus mollis vestibulum. Ante lacus venenatis tellus nec id ut. A amet in a ac ornare pellentesque. Venenatis feugiat commodo vitae orci. Sagittis quis arcu fermentum auctor consequat at elementum",
    },
    {
      id: 2,
      name: "Nia Fitri",
      position: "Account Manager",
      image: "/img/figma-assets/testimoni/nia.jpg",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. At nunc tincidunt rhoncus mollis vestibulum. Ante lacus venenatis tellus nec id ut. A amet in a ac ornare pellentesque. Venenatis feugiat commodo vitae orci. Sagittis quis arcu fermentum auctor consequat at elementum",
    },
    {
      id: 3,
      name: "Rudi",
      position: "Frontend Developer",
      image: "/img/figma-assets/testimoni/rudi.jpg",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. At nunc tincidunt rhoncus mollis vestibulum. Ante lacus venenatis tellus nec id ut. A amet in a ac ornare pellentesque. Venenatis feugiat commodo vitae orci. Sagittis quis arcu fermentum auctor consequat at elementum",
    },
    {
      id: 4,
      name: "Beni",
      position: "Job Seeker",
      image: "/img/figma-assets/testimoni/beni.jpg",
      deskripsi:
        "Lorem ipsum dolor sit amet consectetur. At nunc tincidunt rhoncus mollis vestibulum. Ante lacus venenatis tellus nec id ut. A amet in a ac ornare pellentesque. Venenatis feugiat commodo vitae orci. Sagittis quis arcu fermentum auctor consequat at elementum",
    },
  ];
  return (
    <div
      className="wrapper bg-[#155DFC] px-4 py-[58px] sm:px-10 lg:px-20"
      id="testimoni"
    >
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <p className="font-semibold text-white text-base md:text-lg lg:text-xl text-center lg:text-left">
          Beberapa Testimoni Dari Para Job Seeker
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 w-full">
          {testimonials.map((testimoni, index) => (
            <div
              key={index}
              className="bg-white rounded-[10px] px-[22px] py-[39px] gap-[10px] flex flex-col space-y-4 md:space-y-8"
            >
              <p className="font-normal text-base text-[#0A0A0A] text-justify">
                {testimoni.deskripsi}
              </p>
              <div className="flex flex-row space-x-4 items-center mt-auto">
                <div
                  className="h-[58px] w-[58px] border border-[#155DFC] rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimoni.image})` }}
                ></div>
                <div className="flex flex-col space-y-1">
                  <p className="text-base md:text-lg lg:text-xl text-[#0A0A0A] font-medium">
                    {testimoni.name}
                  </p>
                  <p className="text-xs md:text-sm lg:text-base font-normal text-[#0A0A0A]">
                    {testimoni.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
