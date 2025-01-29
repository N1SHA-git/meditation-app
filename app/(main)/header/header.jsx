import { Logo } from "@/public/icons/logo";
import Link from "next/link";
import { Profile } from "./profile";

export function Header() {
  return (
    <header className="flex justify-between pt-6 px-8">
      <div className="flex gap-5">
        <Logo className="w-14 h-14" />
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/home">
              <p className="hover:text-[#69c8af] transition-colors duration-300">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/music">
              <p className="hover:text-[#55a28e] transition-colors duration-300">
                Music
              </p>
            </Link>
          </li>
          <li>
            <Link href="/tools">
              <p className="hover:text-[#55a28e] transition-colors duration-300">
                Tools
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <Profile name="Afreen" className="max-w-36 w-36" />
    </header>
  );
}
