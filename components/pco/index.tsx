"use client";
import LocalTable from "./table";
import json from "@/data/pco.json";
import DropdownInput from "./dropdownInput";
import { useState } from "react";

const keys = Object.keys(json[0]);

export default function Index() {
    const [queries, setQueries] = useState({
        type: "",
        query: "",
    });

    const handleUpdate = (type: string, query: string) => {
        setQueries({
            type: type,
            query: query,
        });
    }

    const jsonFilter = () => {
        if (queries.type === "" || queries.query === "") {
            return json;
        }
        return json.filter((row: any) => row[queries.type].toLowerCase().includes(queries.query.toLowerCase()));
    };
  return (
    <div>
      <div id="toast_root" />
      <DropdownInput headers={keys} updatefn={handleUpdate} />
      <LocalTable headers={keys} rows={jsonFilter()} />
    </div>
  );
}
