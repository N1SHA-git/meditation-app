export function UiInput({ type, label }) {
  return (
    <input
      required
      type={type}
      aria-label={label}
      placeholder={label}
      className="bg-transparent p-3 text-white/70 border-b border-white/70 focus:outline-none focus:ring-0 focus:border-[#69c8af] focus:border-b-2 focus:placeholder:text-[#69c8af]"
    />
  );
}
