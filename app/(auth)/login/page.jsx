"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { UiButton } from "@/app/shared/uikit/ui-button";
import { AuthorizationLayout } from "../ui/authorization-layout";
import { SignLink } from "@/app/shared/uikit/sign-link";
import { Logo } from "@/public/icons/logo";
import { AuthorizationForm } from "../ui/authorization-form";
import { UiInput } from "@/app/shared/uikit/ui-input";
import { useAuth } from "@/app/hooks/use-auth";
import "../../lib/firebase";
import { Leaves } from "@/public/icons/leaves";


export default function LoginPage() {
  const { email, password, handleInputChange, handleSignButton, isLoading } =
    useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const searchParams = useSearchParams();
  const errorMessage = searchParams.get("error");

  const isLogin = true;

  return (
    <>
      <AuthorizationLayout
        logo={<Logo className="w-[100px] h-[100px] inline-block" />}
        title="Sign In"
        subtitle="Sign in now to acces your excercises and saved music."
        form={
          <AuthorizationForm
            onSubmit={handleSubmit(() =>
              handleSignButton(email, password, isLogin),
            )}
            emailInput={
              <UiInput
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => handleInputChange(e, "email")}
                formInfo={{
                  ...register("email", {
                    required: "This field is required",
                  }),
                }}
                className={
                  (errors?.email?.message || errorMessage) && "border-red-500"
                }
              />
            }
            passwordInput={
              <UiInput
                type="password"
                label="Password"
                value={password}
                onChange={(e) => handleInputChange(e, "password")}
                formInfo={{
                  ...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "The password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "The password must be no more than 50 characters",
                    },
                  }),
                }}
                className={
                  (errors?.password?.message || errorMessage) &&
                  "border-red-500"
                }
              />
            }
            emailErrorMessage={errors?.email?.message}
            passwordErrorMessage={errorMessage || errors?.password?.message}
          />
        }
        button={
          <UiButton
            type="submit"
            form="AuthorizationForm"
            className="min-w-full rounded-lg"
          >
            LOGIN
          </UiButton>
        }
        helperText="Don’t have an account?"
        link={<SignLink href="/sign-up">Sign Up</SignLink>}
      />
      <Leaves className="absolute z-0 top-[40%] left-[40%]" />
      <Leaves className="absolute z-0 -top-[48%] -left-[10%] rotate-180" />
      <Leaves className="absolute z-0 -top-[70%] left-[50%] -rotate-90" />
      <Leaves className="absolute z-0 top-[50%] -left-[40%]" />
    </>
  );
}
