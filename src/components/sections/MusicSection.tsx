import React from "react";
import { Play } from "lucide-react";
import { FEATURED_TRACKS } from "@/constants";

export const MusicSection: React.FC = () => {
  return (
    <section id="musica" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Canciones Destacadas
        </h2>
        <div className="space-y-4">
          {FEATURED_TRACKS.map((track) => (
            <div
              key={track.id}
              className="bg-gradient-to-br from-purple-900 to-indigo-900 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 flex items-center justify-between hover:from-purple-800 hover:to-indigo-800 transition transform hover:-translate-y-1 border border-purple-500 border-opacity-30"
            >
              <div className="flex items-center gap-4">
                <button
                  className="bg-purple-700 hover:bg-purple-600 p-3 rounded-full transition transform hover:scale-110 shadow-md"
                  aria-label={`Play ${track.title}`}
                >
                  <Play className="w-5 h-5 text-white" />
                </button>
                <div>
                  <h3 className="font-bold text-lg text-white">
                    {track.title}
                  </h3>
                  <p className="text-purple-200">{track.artist}</p>
                </div>
              </div>
              <span className="text-purple-300">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
