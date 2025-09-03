"use client";
import Image from "next/image";
import NewHeroImage from "../../../../public/img/figma-assets/NewHeroImage.png";
import { getCities } from "../../../../actions/cities/get";
import AsyncSelect from "react-select/async";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "@/utils/helper";
import { getJobClassifications } from "../../../../actions/options";
import Select from "react-select";
import { useRouter } from "next/navigation";

interface selectOption {
  value: number;
  label: string;
}

const fetchCities = async (inputValue: string) => {
  if (!inputValue) return [];

  try {
    const res = await getCities({ limit: 10, name: inputValue });
    const cityList = res.status ? res.data.data : [];

    if (Array.isArray(cityList)) {
      const formattedCities: selectOption[] = cityList.map((city) => ({
        value: city.id,
        label:
          city.name + (city.province?.name ? ", " + city.province.name : ""),
      }));

      return formattedCities;
    }
  } catch (error) {
    return [];
  }
};

const NewHero = () => {
  const loadCityOptions = useCallback(
    debounce(
      (
        input: string,
        callback: (options: { value: number; label: string }[]) => void
      ) => {
        fetchCities(input).then((options) => callback(options ?? []));
      },
      300
    ),
    []
  );

  const [optionsJobClassification, setOptionJobClasssifications] = useState<
    selectOption[]
  >([]);
  const [loadingJobClassification, setLoadingJobClassifications] =
    useState(true);

  useEffect(() => {
    const fetchDataJobClassification = async () => {
      setLoadingJobClassifications(true);
      try {
        const resJobClassification = await getJobClassifications();

        if (Array.isArray(resJobClassification)) {
          setOptionJobClasssifications(
            resJobClassification.map((jobClassfication) => ({
              value: jobClassfication.id,
              label: jobClassfication.name,
            }))
          );
        }
      } catch (err) {
        // console.error("Failed to load job classifications", err);
      } finally {
        setLoadingJobClassifications(false);
      }
    };

    fetchDataJobClassification();
  }, []);

  const [title, setTitle] = useState("");
  const [selectedCity, setSelectedCity] = useState<selectOption | null>(null);
  const [selectedJobClassification, setSelectedJobClassification] =
    useState<selectOption | null>(null);
  const router = useRouter();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (title) params.set("title", title);
    if (selectedCity) params.set("city", selectedCity.value.toString());
    if (selectedJobClassification)
      params.set("classification", selectedJobClassification.value.toString());

    router.push(`job?${params.toString()}`);
  };

  return (
    <div className="wrapper bg-white px-4 pt-[100px] pb-[50px] sm:px-10 lg:px-20">
      <div className="flex flex-col flex-col-reverse md:flex-row md:space-x-8 justify-between w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-12 lg:gap-[66px] w-full md:w-1/2">
          <div className="flex flex-col space-y-[10px] mr-8]">
            <p className="text-sm md:text-base lg:text-lg font-semibold text-[#1FCCBC]">
              #RaihKarirImpianmu
            </p>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#2060E9]  lg:leading-[74px] tracking-[-2%]">
              Temukan peluang terbaikmu di{" "}
              <span className="text-[#F1BC52]">Coptera career!</span>
            </h1>
          </div>

          <div className="w-full rounded-lg py-[30px] px-[40px] border border-[#155DFC] flex flex-col space-y-[30px]">
            <div className="flex flex-row space-x-5 w-full">
              <input
                id="jobTitle"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="cari pekerjaan, kantor dan skill"
                className="rounded-lg w-3/4 border border-[#8EC5FF] px-5 py-2 text-base placeholder:text-[#A1A1A1] text-[#404040]"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-base py-2 px-[50px]"
              >
                Cari
              </button>
            </div>
            <div className="flex flex-row space-x-5 w-full">
              <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={loadCityOptions}
                isClearable
                value={selectedCity}
                onChange={(option) => setSelectedCity(option)}
                menuPortalTarget={
                  typeof window !== "undefined" ? document.body : null
                }
                placeholder={
                  <div className="flex flex-row space-x-2 items-center text-[#404040] font-medium">
                    <img
                      src="/img/icon/i-location.png"
                      alt="icon location"
                      className="h-6 w-6"
                    />
                    <span>Lokasi</span>
                  </div>
                }
                className="w-1/2"
                styles={{
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  control: (base) => ({
                    ...base,
                    borderRadius: "0.5rem", // rounded-lg
                    borderColor: "#8EC5FF",
                    padding: "2px 5px",
                    minHeight: "42px",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: "0 5px",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#404040",
                    fontWeight: 500,
                  }),
                }}
              />
              <Select
                options={optionsJobClassification}
                isLoading={loadingJobClassification}
                isClearable
                value={selectedJobClassification}
                onChange={(option) => setSelectedJobClassification(option)}
                menuPortalTarget={
                  typeof window !== "undefined" ? document.body : null
                }
                placeholder={
                  <div className="flex flex-row space-x-2 items-center text-[#404040] font-medium">
                    <img
                      src="/img/icon/i-suitcase.png"
                      alt="icon category"
                      className="h-6 w-6"
                    />
                    <span>Kategori</span>
                  </div>
                }
                className="w-1/2"
                styles={{
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  control: (base) => ({
                    ...base,
                    borderRadius: "0.5rem", // rounded-lg
                    borderColor: "#8EC5FF",
                    padding: "2px 5px",
                    minHeight: "42px",
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    padding: "0 5px",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#404040",
                    fontWeight: 500,
                  }),
                }}
              />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-full md:w-1/2 relative">
          <Image
            src={NewHeroImage}
            alt="Hero Coptera"
            className=" w-full h-auto object-cover"
            fill
            priority
            placeholder="blur"
            quality={90}
          />
        </div>
      </div>
    </div>
  );
};

export default NewHero;
