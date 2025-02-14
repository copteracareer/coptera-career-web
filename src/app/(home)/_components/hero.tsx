export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[600px] lg:min-h-[750px] gap-8 px-4">
      {/* Judul Hero */}
      <div className="text-[32px] lg:text-[48px] font-bold text-center">
        <h1>
          Grab the Opportunity to{" "}
          <span className="text-yellow-400">Innovate</span>
        </h1>
        <h1>and Make Dreams Come True</h1>
      </div>

      {/* Deskripsi Hero */}
      <p className="text-[14px] lg:text-[16px] text-gray-400 text-center">
        Find your dream career here, who knows you might find your soulmate
      </p>
    </div>
  );
}
