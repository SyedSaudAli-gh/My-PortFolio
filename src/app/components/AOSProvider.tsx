"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: false,
        mirror: true,
      });

      setTimeout(() => {
        AOS.refresh();
      }, 100);
    });
  }, []);

  return null;
}