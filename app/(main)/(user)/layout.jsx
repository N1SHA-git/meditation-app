"use client";

import { Header } from "../header/header";

export default function RootLayout({ children }) {
  return (
    <main className="min-h-screen bg-[#224042]">
      <Header />
      {children}
    </main>
  );
}
