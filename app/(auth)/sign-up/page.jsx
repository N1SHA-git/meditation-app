import { AuthorizationLayout } from "../ui/authorization-layout";
import { UiButton } from "@/app/shared/uikit/ui-button";
import { SignLink } from "@/app/shared/uikit/sign-link";
import { Logo } from "@/public/icons/logo";
import { AuthorizationForm } from "../ui/authorization-form";
import { UiInput } from "@/app/shared/uikit/ui-input";

export default function SignUpPage() {
  return (
    <AuthorizationLayout
      logo={<Logo className="w-[100px] h-[100px] inline-block" />}
      title="Sign Up"
      subtitle="Sign up now for free and start meditating, and explore Medic."
      form={
        <AuthorizationForm
          nameInput={<UiInput type="text" label="Name" />}
          emailInput={<UiInput type="email" label="Email Address" />}
          passwordInput={<UiInput type="password" label="Password" />}
        />
      }
      button={
        <UiButton type="submit" form="AuthorizationForm" className="min-w-full">
          SIGNUP
        </UiButton>
      }
      helperText="Already have an account?"
      link={<SignLink href="/login">Sign In</SignLink>}
    />
  );
}
