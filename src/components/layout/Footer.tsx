import React from "react";
import { SITE_CONFIG } from "@/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-700">
      <div className="container mx-auto text-center text-gray-400">
        <p>
          &copy; {SITE_CONFIG.year} {SITE_CONFIG.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
