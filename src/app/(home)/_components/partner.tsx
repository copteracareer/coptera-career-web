import Image from "next/image";
import { getPartners } from "../../../../actions/options";
import Link from "next/link";

const Partner = async () => {
  const partners = await getPartners();

  if (!partners || partners.length === 0) {
    return null;
  }

  const row1 = partners.slice(0, Math.ceil(partners.length / 2));
  const row2 = partners.slice(Math.ceil(partners.length / 2));

  const repeat = (arr: typeof partners, times = 4) =>
    Array(times).fill(arr).flat();

  return (
    <div className="wrapper bg-[#DBEAFE] px-4 py-[46px] sm:px-10 lg:px-20">
      <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
        <h2 className="font-semibold text-[#155DFC] text-base md:text-lg lg:text-xl text-center">
          Perusahaan yang Telah Memasang Lowongan di Coptera Career
        </h2>
        {/* Row 1 → moving right */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-right space-x-6">
            {repeat(row1).map((partner, index) => {
              const imageUrl = partner.image?.startsWith("http")
                ? partner.image
                : `${process.env.NEXT_PUBLIC_COPTERA_API || ""}/${
                    partner.image
                  }`;

              const logo = (
                <div
                  className="flex-shrink-0 flex justify-center items-center p-5 w-40 h-[85px]
                             bg-[rgba(245,245,245,0.6)] border border-white/70
                             backdrop-blur-[17.5px] rounded-[10px]"
                  aria-label={`Logo perusahaan ${partner.name}`}
                >
                  <div
                    className="w-full h-full bg-contain bg-no-repeat bg-center opacity-85"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  ></div>
                </div>
              );

              return partner.link ? (
                <Link
                  href={partner.link}
                  key={`${partner.id}-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {logo}
                </Link>
              ) : (
                <div key={`${partner.id}-${index}`}>{logo}</div>
              );
            })}
          </div>
        </div>

        {/* Row 2 → moving left */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-left space-x-6">
            {repeat(row2).map((partner, index) => {
              const imageUrl = partner.image?.startsWith("http")
                ? partner.image
                : `${process.env.NEXT_PUBLIC_COPTERA_API || ""}/${
                    partner.image
                  }`;

              const logo = (
                <div
                  className="flex-shrink-0 flex justify-center items-center p-5 w-40 h-[85px]
                             bg-[rgba(245,245,245,0.6)] border border-white/70
                             backdrop-blur-[17.5px] rounded-[10px]"
                  aria-label={`Logo perusahaan ${partner.name}`}
                >
                  <div
                    className="w-full h-full bg-contain bg-no-repeat bg-center opacity-85"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                  ></div>
                </div>
              );

              return partner.link ? (
                <Link
                  href={partner.link}
                  key={`${partner.id}-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {logo}
                </Link>
              ) : (
                <div key={`${partner.id}-${index}`}>{logo}</div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
