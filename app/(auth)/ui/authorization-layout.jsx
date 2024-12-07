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
    <div className="flex flex-col gap-14 justify-center px-9">
      {logo}
      <header className="">
        <h2 className="font-[Alegreya] text-4xl font-bold">{title}</h2>
        <p className="max-w-[70%] mt-3 text-white/70">{subtitle}</p>
      </header>
      {form}
      <div className="flex flex-col items-center justify-center gap-5">
        {button}
        <p>
          {helperText} {link}
        </p>
      </div>
    </div>
  );
}
