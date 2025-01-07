export function WelcomePageLayout({ logo, button, link }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 py-14 px-5">
      {logo}
      <div className="flex flex-col items-center justify-center text-center font-medium">
        <h1 className="font-extrabold text-5xl font-[Alegreya] leading-tight">
          WELCOME
        </h1>
        <p>Do meditation. Stay focused. Live a healthy life.</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mt-14">
        {button}
        <p>Don’t have an account? {link}</p>
      </div>
    </main>
  );
}
