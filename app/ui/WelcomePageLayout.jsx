export function WelcomePageLayout({logo, button, link}) {
  return (
    <>
      {logo}
      <div>
        <h1>WELCOME</h1>
        <p>Do meditation. Stay focused. Live a healthy life.</p>
      </div>
      <div>
        {button}
        <p>Don’t have an account? {link}</p>
      </div>
    </>
  );
}
