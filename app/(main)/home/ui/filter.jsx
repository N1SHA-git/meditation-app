"use client";
import { DropDownMenu } from "@/app/shared/uikit/dropdown-menu";
import { ArrowDown } from "@/public/icons/arrow-down";

const options = ["Views", "Likes", "Date"];

export function Filter({ isOpen, selectOption, selectedOption, toggleSelect }) {
  return (
    <div className="relative mb-10 ml-5 select-none">
      <button
        className="flex justify-between items-center gap-2 border-2 border-[#253334] transition-all duration-300 rounded-lg shadow-md bg-[#69c8af] hover:bg-[#55a28e] w-40 p-3 focus:outline-none focus:ring-2 focus:ring-[#55a28e]"
        onClick={toggleSelect}
      >
        <span className="text-base font-semibold text-white">
          {selectedOption}
        </span>
        <ArrowDown
          className={`text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <DropDownMenu
        isOpen={isOpen}
        options={options}
        onSelectOption={selectOption}
      />
    </div>
  );
}
