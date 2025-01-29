"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/use-auth";

export default function ProtectedRoute({ children }) {
  const { isAuth, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuth) {
      router.push("/login");
    }
  }, [isAuth, isLoading, router]);

  return <>{children}</>;
}
