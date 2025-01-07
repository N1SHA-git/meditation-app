"use client";

import { Header } from "./header/header";

export default function RootLayout({ children }) {
  return (
    <main className="min-h-screen h-screen bg-[#224042]">
      <div
        className="bg-[url('/images/welcome-bg.jpg')] 
          bg-cover bg-bottom bg-no-repeat shadow-2xl"
      >
        <Header />
        {children}
      </div>
    </main>
  );
}
