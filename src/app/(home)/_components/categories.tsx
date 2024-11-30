import { Button } from "@/components/ui/button";

export default function Categories() {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:py-24 lg:px-20 sm:px-6 md:px-12">
      <div className="mt-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-[24px] md:text-[32px] font-bold">
              Explore Jobs by <span className="text-yellow-400">Category</span>
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
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "IT & Software Development", count: 320 },
            { name: "Sales Marketing", count: 320 },
            { name: "Finance Accounting", count: 320 },
            { name: "Administration & HR", count: 320 },
            { name: "Customer Service", count: 320 },
            { name: "Creative Arts & Design", count: 320 },
          ].map((item) => (
            <div
              key={item.name}
              className="p-4 border-2 border-gray-200 rounded-xl w-full"
            >
              <p className="font-bold text-[14px]">{item.name}</p>
              <span className="text-[12px] text-gray-400">
                {item.count} Jobs
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
