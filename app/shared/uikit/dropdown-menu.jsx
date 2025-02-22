"use client"
export function DropDownMenu({ isOpen, options, onSelectOption }) {
  if (!isOpen || !options) return;

  return (
    <div className="absolute left-0 mt-2 rounded-lg shadow-lg bg-white border border-gray-200 z-10 min-w-[10rem]">
      {options.map((option, index) => (
        <button
          key={index}
          className="flex justify-start items-center gap-2 w-full px-4 py-2 text-sm text-gray-800 hover:bg-[#55a28e] hover:text-white focus:bg-[#55a28e] focus:text-white transition-all duration-300 hover:rounded-lg"
          onClick={() => onSelectOption(option)}
        >
          <span className="font-medium">{option}</span>
        </button>
      ))}
    </div>
  );
}
