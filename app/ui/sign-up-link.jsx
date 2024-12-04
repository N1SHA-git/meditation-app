import Link from "next/link";

export function SignUpLink() {
  return (
    <Link href="/auth/sign-up" className="font-bold underline hover:no-underline hover:text-blue-500">
      Sign Up
    </Link>
  );
}
