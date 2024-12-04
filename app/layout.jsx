"use client";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen font-[AlegreyaSans] bg-[url('/images/welcome-bg.jpg')] 
          bg-cover bg-center bg-no-repeat text-white antialiased text-3xl font-medium
          backdrop-blur-sm"
      >
        {children}
      </body>
    </html>
  );
}
