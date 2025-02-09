"use client";
import clsx from "clsx";

export function UiButton({ children, className, type, form, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      form={form}
      className={clsx(
        "flex items-center justify-center text-3xl font-medium px-24 py-3 rounded-xl transition-colors bg-[#69c8af] hover:bg-[#55a28e] shadow-md duration-300",
        className,
      )}
    >
      {children}
    </button>
  );
}
