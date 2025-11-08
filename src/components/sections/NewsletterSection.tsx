"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateEmail } from "@/lib/utils";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setError("");

    if (!email.trim()) {
      setError("Por favor ingresa tu email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor ingresa un email válido");
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-black bg-opacity-30">
      <div className="container mx-auto max-w-2xl text-center">
        <Mail className="w-16 h-16 mx-auto mb-6 text-purple-400" />
        <h2 className="text-4xl font-bold mb-4">Mantente Conectado</h2>
        <p className="text-xl text-gray-300 mb-8">
          Recibe las últimas novedades y lanzamientos exclusivos
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            error={error}
          />
          <Button onClick={handleSubmit} className="md:w-auto">
            Suscribirme
          </Button>
        </div>

        {isSubmitted && (
          <p className="mt-4 text-green-400 font-semibold">
            ¡Gracias por suscribirte!
          </p>
        )}
      </div>
    </section>
  );
};
