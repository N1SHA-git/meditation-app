export function AuthorizationLayout({
  logo,
  title,
  subtitle,
  form,
  button,
  helperText,
  link,
}) {
  return (
    <div className="flex flex-col gap-4 justify-center p-4 m-4 shadow-2xl border border-white/70 rounded-lg z-10 overflow-hidden">
      {logo}
      <header className="mt-2 max-w-[410px]">
        <h2 className="font-[Alegreya] text-3xl font-bold">{title}</h2>
        <p className="max-w-[70%] mt-1 text-white/70">{subtitle}</p>
      </header>
      {form}
      <div className="flex flex-col items-center justify-center gap-2 mt-5">
        {button}
        <p>
          {helperText} {link}
        </p>
      </div>
    </div>
  );
}
