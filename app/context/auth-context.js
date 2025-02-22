"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const router = useRouter();
  const [authState, setAuthState] = useState({
    username: "",
    email: "",
    password: "",
    uid: "",
    token: "",
    isAuth: false,
    isLoading: true,
  });

  // 🔹 Следим за состоянием пользователя
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthState({
        username: user?.displayName || "",
        email: user?.email || "",
        uid: user?.uid || "",
        token: (user && (await user.getIdToken())) || "",
        isAuth: !!user,
        isLoading: false,
      });
    });

    return () => unsubscribe();
  }, []);

  const handleSignButton = async (email, password, isLogin, username = "") => {
    try {
      let userCredential;
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

        // Устанавливаем displayName (никнейм)
        await updateProfile(userCredential.user, { displayName: username });
        await userCredential.user.reload(); // 🔹 Принудительно обновляем пользователя
      }

      // 🔹 Получаем обновлённого пользователя
      const updatedUser = auth.currentUser;
      const token = await updatedUser.getIdToken();

      setAuthState((prev) => ({
        ...prev,
        username: updatedUser?.displayName || username, // 🔹 Берём имя пользователя
        uid: updatedUser?.uid,
        token,
        isAuth: true,
        isLoading: false,
      }));

      router.push("/home");
    } catch (error) {
      console.error("Ошибка входа:", error);
      setAuthState((prev) => ({ ...prev, isLoading: false }));
      router.push(
        `/login?error=${encodeURIComponent("Invalid email or password")}`,
      );
    }
  };

  const handleInputChange = (event, field) => {
    setAuthState((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        handleSignButton,
        handleLogout,
        handleInputChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
