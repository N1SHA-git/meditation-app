export function WelcomePageLayout({ logo, button, link }) {
  return (
    <main
      className="relative min-h-screen bg-slate-200/90 bg-[url('/images/welcome-bg.jpg')] 
          bg-cover bg-center bg-no-repeat flex flex-col 
          items-center justify-center gap-6 py-14 px-5"
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
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
      </div>
    </main>
  );
}
