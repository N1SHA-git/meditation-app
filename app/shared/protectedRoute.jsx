"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/auth-context";

export default function ProtectedRoute({ children }) {
  const { isAuth, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuth) {
      router.replace("/login");
    }
  }, [isAuth, isLoading, router]);

  // 🔹 Пока загружается состояние — ничего не рендерим
  if (isLoading || !isAuth) {
    return null;
  }

  return <>{children}</>;
}
