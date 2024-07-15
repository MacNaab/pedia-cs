"use client";
import { nanoid } from "nanoid";

export default function InputDate({
  label,
  name,
  onChange,
  size = "medium",
}: {
  label: string;
  name: string;
  size?: "small" | "medium" | "large";
  onChange?: any;
}) {
  const inputId = nanoid();
  return (
    <div className={`mb-${size === "small" ? "1" : "6"}`}>
      <label
        htmlFor={inputId}
        className="block min-w-fit text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id={inputId}
        name={name}
        type="date"
        onChange={(e) => {
          if (onChange) onChange(e);
        }}
      />
    </div>
  );
}
