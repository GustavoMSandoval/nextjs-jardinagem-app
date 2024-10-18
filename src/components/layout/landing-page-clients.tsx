"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logosFirstRow = [
  '/assets/images_brand/file_01.png',
  '/assets/images_brand/clientes_6.png',
  '/assets/images_brand/clientes_7.png',
  '/assets/images_brand/clientes_8.png',
  '/assets/images_brand/clientes_9.png',
  '/assets/images_brand/clientes_10.png',
];

const logosSecondRow = [
  '/assets/images_brand/clientes_11.png',
  '/assets/images_brand/clientes_12.png',
  '/assets/images_brand/clientes_13.png',
  '/assets/images_brand/clientes_14.png',
  '/assets/images_brand/clientes_15.png',
  '/assets/images_brand/clientes_16.png',
  '/assets/images_brand/clientes_17.png',
];

export default function LandingPageClients() {
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const calculateDuration = (row: HTMLDivElement, logos: string[]) => {
      const totalWidth = row.scrollWidth;
      const viewportWidth = row.offsetWidth;
      const logoCount = logos.length;

      const baseSpeed = 50;
      const minDuration = 10;
      const maxDuration = 60;

      const widthRatio = totalWidth / viewportWidth;

      let duration = (widthRatio * viewportWidth / baseSpeed) * (logoCount / 10);
      duration = Math.max(minDuration, Math.min(duration, maxDuration));

      return duration;
    };

    const animateRow = (row: HTMLDivElement | null, logos: string[]) => {
      if (!row) return;

      const duration = calculateDuration(row, logos);
      row.style.setProperty("--animation-duration", `${duration}s`);
    };

    if (firstRowRef.current && secondRowRef.current) {
      animateRow(firstRowRef.current, logosFirstRow);
      animateRow(secondRowRef.current, logosSecondRow);
    }
  }, [screenWidth]);

  const renderLogo = (logo: string, index: number) => (
<div key={index} className="flex items-center justify-center mx-6 sm:mx-10">
  <div className="relative h-[50px] w-[150px] sm:h-full sm:w-[180px]">
    {/* Using next/image for responsive image loading */}
    <img
      src={logo}
      alt={`Client logo ${index + 1}`}
      className="transition-transform w-20 sm:w-20 md:w-40 duration-300 ease-in-out hover:scale-105"
    />
  </div>
</div>

  );

  return (
    <section
      id="clients"
      className="w-full max-w-[full] h-full flex flex-col gap-8 items-center justify-center bg-transparent mobile:px-6 sm:px-[70px] sm:mb-16 pt-20 sm:pt-28"
    >
   <h1 className="text-center text-2xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl bg-gradient-to-r from-sky-800 to-red-500 bg-clip-text text-transparent font-bold mb-16">
  Nossos parceiros! Clientes que fizeram parte da nossa história.
  </h1>

      <div className="w-full overflow-hidden mask-gradient">
        <div ref={firstRowRef} className="flex animate-carousel">
          <div className="flex shrink-0">
            {logosFirstRow.map(renderLogo)}
          </div>
          <div className="flex shrink-0">
            {logosFirstRow.map(renderLogo)}
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden mask-gradient">
        <div ref={secondRowRef} className="flex animate-carousel-reverse">
          <div className="flex shrink-0">
            {logosSecondRow.map(renderLogo)}
          </div>
          <div className="flex shrink-0">
            {logosSecondRow.map(renderLogo)}
          </div>
        </div>
      </div>
    </section>
  );
}
