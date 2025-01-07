export function HomePageLayout({
  button,
  calmIcon,
  relaxIcon,
  focusIcon,
  anxiousIcon,
  happinessIcon,
  wildIcon,
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-6xl text-center leading-tight font-Alegrya font-bold -mt-16">
        How are you feeling today?
      </h1>
      {button}
      <ul className="flex items-center justify-center gap-16 pb-5">
        <li>{calmIcon}</li>
        <li>{relaxIcon}</li>
        <li>{focusIcon}</li>
        <li>{anxiousIcon}</li>
        <li>{happinessIcon}</li>
        <li>{wildIcon}</li>
      </ul>
    </section>
  );
}
