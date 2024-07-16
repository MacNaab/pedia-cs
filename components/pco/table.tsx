"use client";
import { nanoid } from "nanoid";
import Toast from "@/components/toast";
import { createRoot } from "react-dom/client";

function Thead({ headers }: { headers: string[] }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {headers.map((header) => (
          <th key={nanoid()} scope="col" className="px-6 py-3">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Tbody({ headers, rows }: { headers: string[]; rows: any[] }) {
    const handleClick = (e: any, title: string) => {
        navigator.clipboard.writeText(e.target.textContent);
        createRoot(document.getElementById("toast_root")!).render(
            <Toast style={{ position: "fixed", top: "1%", right: "1%" }}>
              <span className="block sm:inline">
                {`${title} a été copié dans le presse-papier.`}
              </span>
            </Toast>
          );
    }
  return (
    <tbody>
      {rows.map((row: any) => {
        return (
          <tr
            key={nanoid()}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
          >
            {headers.map((header: any, index: number) => {
              if (index === 0) {
                return (
                  <td
                    key={nanoid()}
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {row[header]}
                  </td>
                );
              }
              if (index === 5 || index === 6) {
                return (
                  <td key={nanoid()} className="px-6 py-4 cursor-copy" onClick={(e) => handleClick(e, header)}>
                    {row[header]}
                  </td>
                );
              }
              return (
                <td key={nanoid()} className="px-6 py-4">
                  {row[header]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: any[];
}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <Thead {...{ headers }} />
        <Tbody {...{ headers, rows }} />
      </table>
    </div>
  );
}
