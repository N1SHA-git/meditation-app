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
          className={`text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 rounded-lg shadow-lg bg-white border border-gray-200 z-10 min-w-[10rem]">
          {options.map((option, index) => (
            <button
              key={index}
              className="flex justify-start items-center gap-2 w-full px-4 py-2 text-sm text-gray-800 hover:bg-[#55a28e] hover:text-white focus:bg-[#55a28e] focus:text-white transition-all duration-300 hover:rounded-lg"
              onClick={() => selectOption(option)}
            >
              <span className="font-medium">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
