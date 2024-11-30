import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Feature() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-16 lg:py-24">
      {/* Container Cards */}
      <div className="lg:w-[50%] w-full sm:w-5/6 md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Card 1 */}
        <Card className="w-full min-h-[220px] sm:min-h-[250px] shadow-md hover:shadow-lg border border-gray-200 transition-all p-4">
          <CardHeader className="flex">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
              {/* Icon */}
              <Image
                src=""
                alt="Career Guidance Icon"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-3">Career Guidance</CardTitle>
            <CardDescription>
              Career guidance for career planning, career consultations
              accompanied by professionals.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Card 2 (Middle) */}
        <Card className="w-full min-h-[220px] sm:min-h-[250px] shadow-md hover:shadow-lg border border-gray-200 transition-all bg-blue-500 text-white relative z-10 md:translate-y-0 lg:-translate-y-12 p-4">
          <CardHeader className="flex">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              {/* Icon */}
              <Image
                src=""
                alt="Resume Icon"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-3">Creating a Resume/CV</CardTitle>
            <CardDescription className="text-white">
              Creating a resume or CV that meets standards is assisted by
              professional HRD so you dont just make a resume/CV and prepare
              other documents.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="w-full min-h-[220px] sm:min-h-[250px] shadow-md hover:shadow-lg border border-gray-200 transition-all p-4">
          <CardHeader className="flex">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              {/* Icon */}
              <Image
                src=""
                alt="Application Assistance Icon"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-3">Application Assistance</CardTitle>
            <CardDescription>
              In this program, you will be accompanied to apply for jobs by
              people who are already professionals in their fields.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
