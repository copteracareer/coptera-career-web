import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Tips = () => {
  const tips = [
    {
      title: "Tips for answering questions about advantages and disadvantages",
      date: "2024, 10 February",
      imageUrl: "https://via.placeholder.com/800x400", // Placeholder image
      href: "/tips/tip1",
    },
    {
      title: "Create a more structured CV",
      date: "2024, 10 February",
      imageUrl: "https://via.placeholder.com/400x200", // Placeholder image
      href: "/tips/tip2",
    },
    {
      title: "What's in a UI/UX Design portfolio?",
      date: "2024, 10 February",
      imageUrl: "https://via.placeholder.com/400x200", // Placeholder image
      href: "/tips/tip3",
    },
    {
      title: "Tips for answering questions about advantages and disadvantages",
      date: "2024, 10 February",
      imageUrl: "https://via.placeholder.com/400x200", // Placeholder image
      href: "/tips/tip4",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Tips & Trick</h2>
        <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 md:px-6">
          View More
        </Button>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Item pertama dibuat lebih besar di layar besar */}
        <div className="sm:col-span-2 lg:col-span-2 row-span-2 rounded-lg overflow-hidden transition-shadow duration-300">
          <Image
            src={tips[0].imageUrl}
            alt={tips[0].title}
            width={800}
            height={400}
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
          <div className="p-4 bg-white">
            <p className="text-sm text-gray-500">{tips[0].date}</p>
            <h3 className="mt-2 text-lg md:text-xl font-bold text-gray-800">
              {tips[0].title}
            </h3>
            <Link
              href={tips[0].href}
              className="mt-4 flex items-center text-blue-500 hover:underline"
            >
              Read more <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Item lainnya */}
        {tips.slice(1).map((tip, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden transition-shadow duration-300"
          >
            <Image
              src={tip.imageUrl}
              alt={tip.title}
              width={400}
              height={200}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-500">{tip.date}</p>
              <h3 className="mt-2 text-md md:text-lg font-bold text-gray-800">
                {tip.title}
              </h3>
              <Link
                href={tip.href}
                className="mt-4 flex items-center text-blue-500 hover:underline"
              >
                Read more <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
