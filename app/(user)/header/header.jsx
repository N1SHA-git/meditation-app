import { Logo } from "@/public/icons/logo";
import Link from "next/link";
import { Profile } from "./profile";

export function Header() {
  return (
    <header className="flex justify-between pt-6 px-8">
      <ul className="flex items-center gap-5">
        <li>
          <Logo className="w-14 h-14" />
        </li>
        <li>
          <Link href="/main">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/sounds">
            <p>Music</p>
          </Link>
        </li>
        <li>
          <Link href="/tools">
            <p>Tools</p>
          </Link>
        </li>
      </ul>
      <Profile name="Afreen" className="max-w-36 w-36"/>
    </header>
  );
}
