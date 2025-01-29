import React from "react";
import { EventCard } from "./eventCard";

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

export default EventSection;
