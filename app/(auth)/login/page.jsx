import { UiButton } from "@/app/shared/uikit/ui-button";
import { AuthorizationLayout } from "../ui/authorization-layout";
import { SignLink } from "@/app/shared/uikit/sign-link";
import { Logo } from "@/public/icons/logo";
import { AuthorizationForm } from "../ui/authorization-form";
import { UiInput } from "@/app/shared/uikit/ui-input";

export default function LoginPage() {
  return (
    <AuthorizationLayout
      logo={<Logo className="w-[100px] h-[100px] inline-block" />}
      title="Sign In"
      subtitle="Sign in now to acces your excercises and saved music."
      form={
        <AuthorizationForm
          emailInput={<UiInput type="email" label="Email Address" />}
          passwordInput={<UiInput type="password" label="Password" />}
        />
      }
      button={
        <UiButton type="submit" form="AuthorizationForm" className="min-w-full">
          LOGIN
        </UiButton>
      }
      helperText="Don’t have an account?"
      link={<SignLink href="/sign-up">Sign Up</SignLink>}
    />
  );
}
