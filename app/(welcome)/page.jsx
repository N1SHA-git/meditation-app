"use client";
import { Logo } from "@/public/icons/logo";
import { WelcomePageLayout } from "./ui/welcomePageLayout";
import { SignLink } from "../shared/uikit/sign-link";
import { UiButton } from "../shared/uikit/ui-button";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <WelcomePageLayout
      logo={<Logo />}
      button={
        <Link href="/login">
          <UiButton className="py-5">Login With Email</UiButton>
        </Link>
      }
      link={<SignLink href="/sign-up">Sign Up</SignLink>}
    />
  );
}
