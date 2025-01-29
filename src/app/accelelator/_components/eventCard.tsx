import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  type: string;
  price: string;
  image: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  description,
  image,
  type,
  price,
}) => {
  return (
    <Link href="/accelelator/detail">
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden p-4">
        {/* Header Section */}
        <div className="relative bg-blue-100">
          <Image
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-lg"
            width={400}
            height={200}
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="w-[100px] mb-2">
            <h5
              className={`text-md font-bold ${
                type === "Rekaman"
                  ? "text-orange-600 bg-orange-100"
                  : "text-blue-600 bg-blue-100"
              } text-center  px-4 py-2 rounded-md`}
            >
              {type}
            </h5>
          </div>

          {/* Date and Time */}
          <div className="flex items-center gap-4 text-sm text-blue-700 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-xs">{time}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 mb-4 font-medium">
            {description}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p
              className={`text-lg font-semibold ${
                price === "Gratis" ? "text-blue-600" : "text-blue-600"
              }`}
            >
              {price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
