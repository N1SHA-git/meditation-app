"use client";
export function DropDownMenu({
  isOpen,
  options,
  onSelectOption,
  maxViewOptions,
}) {
  if (!isOpen || !options) return;

  const containerHeight = maxViewOptions ? `${maxViewOptions * 40}px` : "auto";

  return (
    <div
      className="absolute left-0 mt-2 rounded-lg shadow-lg bg-white border 
    border-gray-200 z-10 min-w-[10rem] overflow-y-scroll scroll-smooth"
      style={{ maxHeight: containerHeight }}
    >
      {options.map((option, index) => (
        <button
          key={index}
          className="flex justify-start items-center gap-2 px-4 py-2 text-sm w-full
          text-gray-800 hover:bg-[#55a28e] hover:text-white focus:bg-[#55a28e] focus:text-white transition-all duration-200 
          hover:rounded-lg"
          onClick={() => onSelectOption(option)}
        >
          <p className="font-medium">{option}</p>
        </button>
      ))}
    </div>
  );
}
