import { Logo } from "@/public/icons/logo";
import { WelcomePageLayout } from "./ui/welcomePageLayout";
import { LoginLink } from "./ui/login-link";
import { SignUpLink } from "./ui/sign-up-link";

export default function WelcomePage() {
  return (
    <WelcomePageLayout
      logo={<Logo />}
      button={<LoginLink />}
      link={<SignUpLink />}
    />
  );
}
