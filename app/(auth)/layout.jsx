"use client";

export default function RootLayout({ children }) {
  return (
    <main className="relative overflow-hidden flex items-center justify-center min-h-screen bg-[#224042]">
      {children}
    </main>
  );
}
