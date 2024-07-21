"use client";

import { nanoid } from "nanoid";
import { useState, useRef } from "react";

function SearchInput({
  setQuery
}: {
  setQuery: (query: string) => void
}) {
  const query = useRef<any>(null);
  return (
    <div className="relative w-full">
      <input
        type="text"
        ref={query}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Rechercher..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="button"
        className="absolute inset-y-0 end-0 flex items-center pe-3"
        onClick={() => {
          (query.current.value = "");
          setQuery("");
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path
            d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
}

function SideBarItem({
  name,
  keys,
  setActive,
}: {
  name: string;
  keys: any;
  setActive: (active: string) => void;
}) {
  const [show, setShow] = useState(true);
  return (
    <>
      <li key={nanoid()}>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          onClick={() => setShow(!show)}
        >
          <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </a>
      </li>
      <ul
        className="font-medium text-sm mx-4"
        style={{ display: show ? "block" : "none" }}
      >
        {keys[name].map((e: any) => (
          <li key={nanoid()}>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              onClick={() => setActive(e)}
            >
              <span className="flex-1 ms-3 whitespace-nowrap">{e}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export function SideBar({
  keys,
  setActive,
  setQuery,
}: {
  keys: {
    [key: string]: any[];
  };
  setActive: (active: string) => void;
  setQuery: (query: string) => void;
}) {
  return (
    <div
      id="default-sidebar"
      className="w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <SearchInput setQuery={setQuery} />
          </li>
          {Object.keys(keys).map((key) => (
            <SideBarItem
              key={nanoid()}
              name={key}
              keys={keys}
              setActive={setActive}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function AffBar({ active, rows }: { active: string; rows: any }) {
  return (
    <div
      className="p-4 overflow-auto"
      style={{ width: "-webkit-fill-available" }}
    >
      <div className="text-3xl font-bold text-center underline uppercase">
        {active}
      </div>
      <div className="my-2 mx-4">{rows[active]}</div>
    </div>
  );
}
