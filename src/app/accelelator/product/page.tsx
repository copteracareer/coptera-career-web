import React from "react";
import { EventCard } from "../_components/eventCard";

const ProductPage = () => {
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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 border rounded-lg bg-white">sidebar</div>
        <div className="md:col-span-3">
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

export default ProductPage;
