"use client";
import { useState } from "react";
import { SideBar } from "./mySideBar";
import { dataKeys } from "./data";
import PostBody from "@/components/markdown/postBody";

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

export default function Index({ decodedId, content }: { decodedId: string; content: any }) {
  const [active, setActive] = useState("");
  const [query, setQuery] = useState("");
  return (
    <div
      className="md:flex md:overflow-hidden"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <SideBar
        keys={filterDataKeys(query)}
        setActive={setActive}
        setQuery={setQuery}
      />
      <div className="m-4 overflow-y-auto">
        <div className="text-3xl underline font-bold">{decodedId}</div>
        <article className="prose dark:prose-invert max-w-full">
          <PostBody>{content}</PostBody>
        </article>
      </div>
    </div>
  );
}
