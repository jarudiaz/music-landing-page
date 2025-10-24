import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<InputProps> = ({ error, className, ...props }) => {
  return (
    <div className="w-full">
      <input
        className={cn(
          "w-full px-6 py-4 rounded-full bg-white bg-opacity-20 backdrop-blur-lg border border-purple-400",
          "focus:outline-none focus:ring-2 focus:ring-purple-500",
          "text-white placeholder-gray-400",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
};
