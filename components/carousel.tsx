"use client";
import { nanoid } from "nanoid";
import { useState } from "react";

export function Carousel({ children, colors }: { children: React.ReactNode[], colors: string[] }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => prev === children.length - 1 ? 0 : prev + 1);
  const handlePrev = () => setCurrent((prev) => prev === 0 ? children.length - 1 : prev - 1);

  return (
    <div className="relative w-full">
      <div className="relative h-full overflow-hidden rounded-lg sm:overflow-y-auto">
        {children.map((child, index) => (
          <div
            key={nanoid()}
            className={`duration-700 ${colors[index]} px-16 flex justify-center items-center ease-in-out min-w-[400px] min-h-[600px] ${index === current ? 'block' : 'hidden'}`}
            data-carousel-item
          >
            {child}
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {children.map((_, index) => (
          <button
            key={nanoid()}
            type="button"
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-white/50 dark:bg-gray-800/60' : 'bg-white/30 dark:bg-gray-800/30'}`}
            aria-current={index === current ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Précédent</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Suivant</span>
        </span>
      </button>
    </div>
  );
}
