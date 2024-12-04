import { UiButton } from "@/uikit/ui-button";
import Link from "next/link";

export function LoginLink() {
  return (
    <Link href="/auth/login">
      <UiButton>Login With Email</UiButton>
    </Link>
  );
}
