"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export function useAuth() {
  const router = useRouter();

  const [{ username, email, password, uid, token, isAuth }, setAuthState] =
    useState(() => {
      return {
        username: "",
        email: "",
        password: "",
        uid: "",
        token: "",
        isAuth: false,
      };
    });

  const handleInputChange = (event, field) => {
    setAuthState((lastAuthState) => {
      return {
        ...lastAuthState,
        [field]: event.target.value,
      };
    });
  };

  const handleSignButton = async (email, password, isLogin) => {
    const auth = getAuth();
    let userCredential;
    try {
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
      } else {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
      }
      const { user } = userCredential;
      const token = await user.getIdToken();
      setAuthState((lastAuthState) => {
        return {
          ...lastAuthState,
          uid: user.uid,
          token,
          isAuth: true,
        };
      });
      router.push("/");
    } catch (error) {
      router.push(
        `/login?error=${encodeURIComponent("Invalid email or password")}`,
      );
    }
  };

  return {
    username,
    handleInputChange,
    email,
    password,
    uid,
    token,
    isAuth,
    handleSignButton,
  };
}
