import { useState } from "react";
export function MeditationLayout({ image, timer, button }) {
  const [isSplit, setIsSplit] = useState(false);
  const handleToggle = () => {
    setIsSplit(!isSplit);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-5xl font-Alegrya font-bold">Meditation</h1>
        <p className="text-2xl text-white/70 text-center">
          Guided by a short introductory course, <br /> start trying meditation.
        </p>
      </div>
      {image}
      <div>
        {timer}
      </div>
    </section>
  );
}
