import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#f5f1e8",
    description: "Premium portfolio system for Fabian Galan.",
    display: "standalone",
    name: "Kodigo Portfolio",
    short_name: "Kodigo",
    start_url: "/",
    theme_color: "#0f766e",
  };
}
