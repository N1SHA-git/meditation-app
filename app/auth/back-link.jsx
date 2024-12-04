import { Logo } from "@/public/icons/logo";
import Link from "next/link";

export function BackLink() {
  return (
    <Link href="/">
      <Logo className="scale-50 inline-block" />
    </Link>
  );
}
