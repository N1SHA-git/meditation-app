"use client";
import clsx from "clsx"

export function UiInput({ type, label, value, onChange, formInfo, title, className }) {
  return (
    <input
      {...formInfo}
      type={type}
      aria-label={label}
      autoComplete={label}
      title={title}
      placeholder={label}
      value={value}
      onChange={onChange}
      className={clsx("bg-transparent p-3 text-white border-b border-white/70 focus:outline-none focus:ring-0 focus:border-[#69c8af] focus:border-b-2 focus:placeholder:text-[#69c8af]", className)}
    />
  );
}
