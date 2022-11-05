import React from "react";
import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  function getWindowDimensions() {
    if (typeof window !== "undefined"){
        // const width = 0, height = 0;
    const { innerWidth: width = 0, innerHeight: height = 0} = window;
    return {
        width,
        height,
      };
    }
    
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
