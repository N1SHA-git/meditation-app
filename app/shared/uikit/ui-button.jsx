import clsx from "clsx";

export function UiButton({ children, className, type, form }) {
  return (
    <button
      type={type}
      form={form}
      className={clsx(
        "flex items-center justify-center text-4xl font-medium px-24 py-6 rounded-xl transition-colors bg-[#69c8af] hover:bg-[#55a28e] shadow-md",
        className,
      )}
    >
      {children}
    </button>
  );
}
