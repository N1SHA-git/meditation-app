"use client";
import { useRouter } from "next/navigation";
import {isAuth} from './hooks/use-auth'

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  

  if (!isAuth) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}
