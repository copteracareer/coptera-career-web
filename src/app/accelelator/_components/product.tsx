import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ProductSection = () => {
  const products = [
    {
      title: "Career Accelerator",
      description:
        "Coptera Career Accelerator membantu kamu tampil memukau dengan CV yang standout dan latihan interview seru yang bikin percaya diri melesat!",
      features: [
        "Mentor profesional HR",
        "Simulasi & Pelatihan Wawancara Kerja",
        "Review CV",
        "Dukungan Hingga Mendapatkan Pekerjaan",
      ],
      image: "/img/product1.png",
      buttonText: "Pelajari Selengkapnya",
      imagePosition: "left",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                product.imagePosition === "right"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } gap-24 items-center`}
            >
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  {product.title}
                </h3>
                <p className="text-gray-500 font-normal">
                  {product.description}
                </p>

                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-500" />
                      <span className="text-blue-950 font-semibold">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  {product.buttonText}
                </Button>
              </div>

              <div className="lg:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
