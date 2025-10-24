import React from "react";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Tu Música, Tu Mundo
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Descubre millones de canciones y crea la banda sonora perfecta para tu
          vida
        </p>
        <Button size="lg">Comenzar Gratis</Button>
      </div>
    </section>
  );
};
