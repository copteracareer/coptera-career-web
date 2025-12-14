import { getTestimonials } from "../../../../actions/options";

const Testimoni = async () => {
  const testimonials = await getTestimonials();

  return (
    <div
      className="wrapper bg-[#155DFC] px-4 py-[58px] sm:px-10 lg:px-20"
      id="testimoni"
    >
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <h2 className="font-semibold text-white text-base md:text-lg lg:text-xl text-center lg:text-left">
          Beberapa Testimoni Dari Para Job Seeker
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 w-full">
          {testimonials.map((testimoni, index) => (
            <div
              key={testimoni.id}
              className="bg-white rounded-[10px] px-[22px] py-[39px] gap-[10px] flex flex-col space-y-4 md:space-y-8"
            >
              <p className="font-normal text-base text-[#0A0A0A] text-justify md:h-[120px] lg:h-[180px] overflow-auto">
                {testimoni.description}
              </p>
              <div className="flex flex-row space-x-4 items-center mt-auto">
                {testimoni.image ? (
                  <div
                    className="h-[58px] w-[58px] border border-[#155DFC] rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${
                        testimoni.image?.startsWith("http")
                          ? testimoni.image
                          : `${process.env.NEXT_PUBLIC_COPTERA_API}/${testimoni.image}`
                      })`,
                    }}
                  ></div>
                ) : (
                  <div className="w-[58px] h-[58px] bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">
                      {testimoni.name.charAt(0)}
                    </span>
                  </div>
                )}
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
