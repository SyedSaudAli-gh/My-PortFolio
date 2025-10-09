"use client";
import React from "react";
import Loader from "./Loader";

const SplashScreen: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);

  React.useEffect(() => {
    // Always start at top if browser tries to restore
    try {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    } catch {}

    // Save current scroll (in case you ever want to restore)
    const scrollY = window.scrollY;

    // HARD scroll lock (desktop + mobile)
    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100%";
      // Some browsers support overscroll behavior via style prop
      // @ts-ignore
      document.documentElement.style.overscrollBehaviorY = "none";

      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      // @ts-ignore
      document.body.style.overscrollBehaviorY = "none";
      document.body.style.touchAction = "none";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    };

    const preventDefault = (e: Event) => e.preventDefault();
    const lockEvents = () => {
      window.addEventListener("wheel", preventDefault, { passive: false });
      window.addEventListener("touchmove", preventDefault, { passive: false });
      window.addEventListener("keydown", blockKeys, { passive: false });
    };

    const blockKeys = (e: KeyboardEvent) => {
      // prevent scroll keys
      const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", "Space", " "];
      if (keys.includes(e.key)) e.preventDefault();
    };

    const unlockScroll = () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
      // @ts-ignore
      document.documentElement.style.overscrollBehaviorY = "";

      document.body.style.overflow = "";
      document.body.style.height = "";
      // @ts-ignore
      document.body.style.overscrollBehaviorY = "";
      document.body.style.touchAction = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.removeEventListener("wheel", preventDefault as any);
      window.removeEventListener("touchmove", preventDefault as any);
      window.removeEventListener("keydown", blockKeys as any);
    };

    lockScroll();
    lockEvents();

    const finish = () => {
      setFadeOut(true);
      // smooth fade-out then unlock and go to top (Hero)
      const t = setTimeout(() => {
        setVisible(false);
        unlockScroll();
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 300);
      return () => clearTimeout(t);
    };

    if (document.readyState === "complete") {
      // page already loaded (cache)
      finish();
    } else {
      // wait for full page load
      window.addEventListener("load", finish, { once: true });
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] grid place-items-center bg-[#111] transition-opacity duration-300 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="status"
      aria-label="Loading"
    >
      <Loader />
    </div>
  );
};

export default SplashScreen;