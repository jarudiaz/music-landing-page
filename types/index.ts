export interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface NavLink {
  href: string;
  label: string;
}
