"use client";
import { useState } from "react";
import Expand from "@/public/icons/Expand";
import Search from "@/public/icons/Search";

function SearchComponent() {
  const [searchOpened, setSearchOpened] = useState(false);
  return (
    <>
      {!searchOpened ? (
        <a onClick={() => setSearchOpened(true)}>
          <Search />
        </a>
      ) : (
        <div className="flex flex-row items-center ml-2 ease-in-out rounded-lg bg-buttonsPrimary">
          <Search />
          <input
            placeholder="Search"
            className="bg-buttonsPrimary text-textPrimary border-0 text-[14px]"
          />
          <a
            className="flex flex-row items-center mr-2"
            onClick={() => setSearchOpened(false)}
          >
            <span className="mr-2 text-[12px]">All</span>
            <Expand />
          </a>
        </div>
      )}
    </>
  );
}

export default SearchComponent;
