"use client";
import { ArrowDown } from "@/public/icons/arrow-down";
import { DropDownMenu } from "@/app/shared/uikit/dropdown-menu";
import { useMemo, useState } from "react";
import { getNames } from "country-list";

export function Country() {
  const countriesList = useMemo(() => getNames(), []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [country, setCountry] = useState("Select Country");
  return (
    <div className="relative">
      <button
        className=" flex items-center justify-center gap-1 ml-4 font-Alegrya"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {country} <ArrowDown className="mt-1 w-3 h-3" />
      </button>
      <DropDownMenu
        isOpen={isMenuOpen}
        options={countriesList}
        maxViewOptions={5}
        onSelectOption={(option) => {
          setCountry(option);
          setIsMenuOpen(false);
        }}
      />
    </div>
  );
}
