import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen font-[AlegreyaSans] text-white antialiased text-xl font-medium bg-[#224042]"
      >
        {children}
      </body>
    </html>
  );
}
