"use client";
import { BackLink } from "./back-link";

export default function RootLayout({ children }) {
  return (
    <main className="min-h-screen bg-[#253334]">
      <BackLink />
      {children}
    </main>
  );
}
