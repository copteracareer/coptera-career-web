import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  type: string;
  price: string;
  image: string;
}

const EventSection: React.FC = () => {
  const events = [
    {
      title: "Webinar Karir",
      date: "Kamis, 2 Maret 2023",
      time: "19:00 - 21:00 WIB",
      description: "Temukan peluang menjadi Fullstack Developer di Telkatu",
      type: "Webinar",
      price: "Gratis",
      image: "/img/webinar.png",
    },
    {
      title: "Webinar Karir",
      date: "Kamis, 2 Maret 2023",
      time: "19:00 - 21:00 WIB",
      description: "Temukan peluang menjadi Fullstack Developer di Telkatu",
      type: "Webinar",
      price: "Gratis",
      image: "/img/webinar.png",
    },
    {
      title: "Webinar Karir",
      date: "Kamis, 2 Maret 2023",
      time: "19:00 - 21:00 WIB",
      description: "Temukan peluang menjadi Fullstack Developer di Telkatu",
      type: "Webinar",
      price: "Gratis",
      image: "/img/webinar.png",
    },
    {
      title: "Webinar Karir",
      date: "Kamis, 2 Maret 2023",
      time: "19:00 - 21:00 WIB",
      description: "Temukan peluang menjadi Fullstack Developer di Telkatu",
      type: "Webinar",
      price: "Gratis",
      image: "/img/webinar.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-24">
      <div className="mx-auto space-y-12">
        {/* Section: Event Webinar */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Event Webinar</h2>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Lihat Semua
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        {/* Section: Bootcamp */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Bootcamp</h2>
            <a href="#" className="text-blue-600 hover:underline text-sm">
              Lihat Semua
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  description,
  image,
  type,
  price,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
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
        <p className="text-sm text-gray-700 mb-4 font-medium">{description}</p>

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
  );
};

export default EventSection;
