"use client";
import { useEffect, useState } from "react";
import Expand from "@/public/icons/Expand";
import Search from "@/public/icons/Search";

type SearchComponentProps = {
  openVersion?: boolean;
};
function SearchComponent({ openVersion }: SearchComponentProps) {
  const [searchOpened, setSearchOpened] = useState(false);

  useEffect(() => {
    if (openVersion) {
      setSearchOpened(true);
    }
  }, [openVersion]);

  return (
    <>
      {!searchOpened ? (
        <a onClick={() => !openVersion && setSearchOpened(true)}>
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
            onClick={() => !openVersion && setSearchOpened(false)}
          >
            <span className="mr-2 text-[12px] text-textPrimary ">All</span>
            <Expand />
          </a>
        </div>
      )}
    </>
  );
}

export default SearchComponent;
