import React from "react";
import { Music, Headphones, Users } from "lucide-react";
import { FEATURES } from "@/constants";
import { Feature } from "@/types";

const icons = [Music, Headphones, Users];

export const FeaturesSection: React.FC = () => {
  const featuresWithIcons: Feature[] = FEATURES.map((feature, index) => {
    const Icon = icons[index];
    return {
      ...feature,
      icon: <Icon className="w-8 h-8" />,
    };
  });

  return (
    <section id="features" className="py-20 px-6 bg-black bg-opacity-30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          ¿Por qué SoundFlow?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresWithIcons.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900 to-indigo-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 hover:from-purple-800 hover:to-indigo-800 transition transform hover:-translate-y-2 border border-purple-500 border-opacity-30"
            >
              <div className="text-purple-300 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-purple-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
