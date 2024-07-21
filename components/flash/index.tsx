"use client";

import { useState } from "react";
import { SideBar, AffBar } from "./mySideBar";
import { dataKeys, data } from "./data";

function filterDataKeys(query: string): { [key: string]: string[] } {
  const result: { [key: string]: string[] } = {};

  for (const category in dataKeys) {
    if (dataKeys.hasOwnProperty(category)) {
      const filteredItems = (dataKeys as { [key: string]: string[] })[
        category
      ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));
      if (filteredItems.length > 0) {
        result[category] = filteredItems;
      }
    }
  }

  return result;
}

export default function Index() {
  const [active, setActive] = useState("");
  const [query, setQuery] = useState("");
  return (
    <div
      className="flex overflow-hidden"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <SideBar keys={filterDataKeys(query)} setActive={setActive} setQuery={setQuery} />
      <AffBar active={active} rows={data} />
    </div>
  );
}
