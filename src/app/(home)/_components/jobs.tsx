import { Button } from "@/components/ui/button";

export default function Jobs() {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:py-24 lg:px-20 sm:px-6 md:px-12">
      <div className="mt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-[24px] md:text-[32px] font-bold">
              Latest Job <span className="text-yellow-400">Opportunities</span>
            </h1>
            <p className="text-[14px] text-gray-400 md:w-3/4 lg:w-1/2 text-justify mt-3">
              Navigate your career journey effortlessly. Explore job
              opportunities sorted by categories tailored to your expertise and
              interests.
            </p>
          </div>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 md:px-6">
            View More
          </Button>
        </div>

        {/* Categories */}
        <p className="text-center text-[14px] text-gray-400 mt-6">
          No jobs are currently available. Please check back soon.
        </p>
      </div>
    </section>
  );
}
