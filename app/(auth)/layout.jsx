"use client";

export default function RootLayout({ children }) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#224042]">
      {children}
    </main>
  );
}
