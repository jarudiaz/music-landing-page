import { Music, Headphones, Users } from "lucide-react";
import { Track, Feature, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#features", label: "Features" },
  { href: "#musica", label: "Música" },
  { href: "#contacto", label: "Contacto" },
];

export const FEATURED_TRACKS: Track[] = [
  { id: 1, title: "Midnight Dreams", artist: "Luna Sky", duration: "3:45" },
  { id: 2, title: "Electric Waves", artist: "Neon Pulse", duration: "4:12" },
  { id: 3, title: "Summer Vibes", artist: "Coastal Breeze", duration: "3:28" },
];

export const FEATURES: Omit<Feature, "icon">[] = [
  {
    title: "Música Ilimitada",
    description: "Accede a millones de canciones de todos los géneros",
  },
  {
    title: "Audio de Alta Calidad",
    description: "Disfruta de sonido premium en todos tus dispositivos",
  },
  {
    title: "Playlists Compartidas",
    description: "Crea y comparte listas con tus amigos",
  },
];

export const SITE_CONFIG = {
  name: "SoundFlow",
  title: "SoundFlow - Tu Música, Tu Mundo",
  description:
    "Descubre millones de canciones y crea la banda sonora perfecta para tu vida",
  year: new Date().getFullYear(),
};
