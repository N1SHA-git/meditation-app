import Link from "next/link";

export function SignLink({children, href}) {
  return (
    <Link href={href} className="font-bold underline transition-colors hover:no-underline hover:text-blue-500">
      {children}
    </Link>
  );
}
