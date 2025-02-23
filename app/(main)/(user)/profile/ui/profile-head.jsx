"use client";
import Image from "next/image";
import defaultAvatarSrc from "@/public/images/defaultAvatar.png";
import { Country } from "./country";
import { useAuth } from "@/app/context/auth-context";

export function ProfileHead({ avatar = defaultAvatarSrc }) {
  const { username } = useAuth();
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        height={150}
        width={150}
        src={avatar}
        alt={username + " image"}
        className="rounded-full"
        unoptimized
      />
      <div className="flex flex-col items-center">
        <p className="text-4xl font-Alegrya">{username}</p>
        <Country />
      </div>
    </div>
  );
}
