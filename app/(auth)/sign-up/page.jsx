"use client";

import { useForm } from "react-hook-form";
import { AuthorizationLayout } from "../ui/authorization-layout";
import { UiButton } from "@/app/shared/uikit/ui-button";
import { SignLink } from "@/app/shared/uikit/sign-link";
import { Logo } from "@/public/icons/logo";
import { AuthorizationForm } from "../ui/authorization-form";
import { UiInput } from "@/app/shared/uikit/ui-input";
import { useAuth } from "@/app/context/auth-context";
import "../../lib/firebase";
import { Leaves } from "@/public/icons/leaves";

const isLoginPage = false;

export default function SignUpPage() {
  const {
    username,
    email,
    password,
    handleInputChange,
    handleSignButton,
    isLoading,
  } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  return (
    <>
      <AuthorizationLayout
        logo={<Logo className="w-[100px] h-[100px] inline-block" />}
        title="Sign Up"
        subtitle="Sign up now for free and start meditating, and explore Medic."
        form={
          <AuthorizationForm
            onSubmit={handleSubmit(() =>
              handleSignButton(email, password, isLoginPage, username),
            )}
            nameInput={
              <UiInput
                type="text"
                label="Name"
                value={username || ""}
                onChange={(e) => handleInputChange(e, "username")}
                formInfo={{
                  ...register("username", {
                    required: "This field is required",
                    pattern: {
                      value: /^[a-zA-Zа-яА-Я0-9._-]+$/,
                      message: "Invalid name",
                    },
                    maxLength: {
                      value: 20,
                      message: "The name must be no more than 20 characters",
                    },
                  }),
                }}
                className={errors?.username?.message && "border-red-500"}
                title="The name can only contain letters, numbers and symbols( - , _ , . )"
              />
            }
            emailInput={
              <UiInput
                type="email"
                label="Email Address"
                value={email || ""}
                onChange={(e) => handleInputChange(e, "email")}
                formInfo={{
                  ...register("email", {
                    required: "This field is required",
                  }),
                }}
                className={errors?.email?.message && "border-red-500"}
              />
            }
            passwordInput={
              <UiInput
                type="password"
                label="Password"
                value={password || ""}
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
                className={errors?.password?.message && "border-red-500"}
              />
            }
            usernameErrorMessage={errors?.username?.message}
            emailErrorMessage={errors?.email?.message}
            passwordErrorMessage={errors?.password?.message}
          />
        }
        button={
          <UiButton
            type="submit"
            form="AuthorizationForm"
            className="min-w-full rounded-lg"
          >
            SIGNUP
          </UiButton>
        }
        helperText="Already have an account?"
        link={<SignLink href="/login">Sign In</SignLink>}
      />
      <Leaves className="absolute z-0 top-[40%] left-[40%]" />
      <Leaves className="absolute z-0 -top-[48%] -left-[10%] rotate-180" />
      <Leaves className="absolute z-0 -top-[70%] left-[50%] -rotate-90" />
      <Leaves className="absolute z-0 top-[50%] -left-[40%]" />
      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px inherit inset !important;
          box-shadow: 0 0 0px 1000px inherit inset !important;
          -webkit-text-fill-color: #fff !important;
          caret-color: #fff;
          color: #fff !important;
          font-size: inherit !important;
          background-color: inherit !important;
          transition: background-color 5000s ease-in-out 0s !important;
        }
      `}</style>
    </>
  );
}
