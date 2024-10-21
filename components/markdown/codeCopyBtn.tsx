"use client";
import React from "react";
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";

export default function Pre({ children }: { children: any }) {
  const [copyOk, setCopyOk] = React.useState(false);
  const iconColor = copyOk ? "#0af20a" : "#ddd";

  const handleClick = (e: any) => {
    navigator.clipboard.writeText(children.props.children);

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 1500);
  };

  return (
    <pre
      style={{ backgroundColor: "rgb(40, 44, 52)" }}
      className="mb-12 relative shadow-[0_0_13px_-7px_rgba(0,0,0,1),_10px_0_13px_-7px_rgba(0,0,0,1)] mt-2 border border-solid p-4 overflow-auto text-sm leading-[1.45] rounded-md"
    >
      <div
        onClick={handleClick}
        className="text-white absolute right-2.5 top-2 text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-90"
      >
        {copyOk ? (
          <div className="flex items-center">
            <span className="mr-1 text-sm">Copié</span>
            <TbCopyCheckFilled color={iconColor} />
          </div>
        ) : (
          <TbCopy color={iconColor} />
        )}
      </div>
      {children}
    </pre>
  );
}
