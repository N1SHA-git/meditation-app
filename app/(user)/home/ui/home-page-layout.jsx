export function HomePageLayout({
  button,
  moodIcons,
  header,
  filter,
  videoList,
}) {
  return (
    <>
      <section
        className="bg-[url('/images/welcome-bg.jpg')] 
              bg-cover bg-bottom bg-no-repeat shadow-xl shadow-[#638c7a9b]"
      >
        {header}
        <div className="flex flex-col items-center justify-center gap-12">
          <h1 className="text-6xl text-center leading-tight font-Alegrya font-bold -mt-16">
            How are you feeling today?
          </h1>
          {button}
          <ul className="flex items-center justify-center gap-16 pb-5">
            {moodIcons.map((icon, index) => (
              <li key={index}>{icon}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex justify-center py-20">
        {filter}
        {videoList}
      </section>
    </>
  );
}
