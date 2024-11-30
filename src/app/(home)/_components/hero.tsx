import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

      {/* Search Bar */}
      <div className="lg:w-1/2 md:w-5/6 bg-white p-1 rounded-lg flex items-center border border-gray-200">
        <div className="flex items-center w-full rounded-lg overflow-hidden">
          {/* Input Pencarian */}
          <Input
            type="text"
            placeholder="Search jobs"
            className="border-0 focus-visible:ring-0 rounded-none w-full px-4 py-2 text-sm"
          />

          {/* Select Pekerjaan */}
          <Select>
            <SelectTrigger className="rounded-none border-0 border-l border-gray-200">
              <SelectValue placeholder="All City/Province" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="city-1">City 1</SelectItem>
              <SelectItem value="city-2">City 2</SelectItem>
              <SelectItem value="city-3">City 3</SelectItem>
            </SelectContent>
          </Select>

          {/* Tombol Search */}
          <Button className="bg-blue-500 text-white rounded-none hover:bg-blue-600 px-6">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
