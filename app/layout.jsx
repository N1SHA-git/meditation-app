import GlobalAudioPlayer from "./(main)/(user)/music/album/[id]/ui/global-audio/globalAudioPlayer";
import { AudioPlayerProvider } from "./context/audio-player-context";
import { AuthProvider } from "./context/auth-context";
import "./styles/globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-[AlegreyaSans] text-white antialiased text-xl font-medium bg-[#224042]">
        <AuthProvider>
          <AudioPlayerProvider>
            {children}
            <GlobalAudioPlayer />
          </AudioPlayerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
