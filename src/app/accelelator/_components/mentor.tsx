import React from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface MentorCardProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  linkedin: string;
}

const MentorSection: React.FC = () => {
  const mentors = [
    {
      name: "Ilham Fathurobanni",
      role: "FullStack Developer",
      description:
        "Jangan lewatkan kesempatan! Harga terjangkau dengan bimbingan sampai kamu mendapatkan pekerjaan yang diinginkan.",
      linkedin: "#",
    },
    {
      name: "Rizky Hendra",
      role: "DevOps Engineer",
      description:
        "Jangan lewatkan kesempatan! Harga terjangkau dengan bimbingan sampai kamu mendapatkan pekerjaan yang diinginkan.",
      linkedin: "#",
    },
    {
      name: "Salma Salsabila",
      role: "UI/UX Designer",
      description:
        "Jangan lewatkan kesempatan! Harga terjangkau dengan bimbingan sampai kamu mendapatkan pekerjaan yang diinginkan.",
      linkedin: "#",
    },
    {
      name: "Intan Indah",
      role: "HRD/Requirement",
      description:
        "Jangan lewatkan kesempatan! Harga terjangkau dengan bimbingan sampai kamu mendapatkan pekerjaan yang diinginkan.",
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Kenalan dengan mentor expert kami
        </h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MentorCard: React.FC<MentorCardProps> = ({
  name,
  role,
  description,
  image,
  linkedin,
}) => {
  return (
    <Card className="min-w-[300px] max-w-[300px] flex-shrink-0">
      <CardHeader className="flex flex-col items-center">
        {/* Placeholder Image */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
          {image ? (
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-sm">No Image</span>
            </div>
          )}
        </div>
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <CardDescription className="text-sm text-black">{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <Linkedin className="h-5 w-5 mr-2" />
          LinkedIn
        </a>
      </CardFooter>
    </Card>
  );
};

export default MentorSection;
