"use client";
import Image from "next/image";
import defaultAvatarSrc from "@/public/images/defaultAvatar.png";
import clsx from "clsx";
import { ArrowDown } from "@/public/icons/arrow-down";
import { DropDownMenu } from "@/app/shared/uikit/dropdown-menu";
import { useCallback, useState } from "react";
import { useAuth } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";

const options = ["Profile", "Log out"];

export function Profile({ className, name, avatar = defaultAvatarSrc }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { handleLogout } = useAuth();

  const handleSelectOption = useCallback(
    (option) => {
      if (option === "Profile") {
        router.push("/profile");
      } else if (option === "Log out") {
        handleLogout();
      }
      setIsMenuOpen(false);
    },
    [handleLogout, router],
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={clsx(
          className,
          "flex items-center gap-2 text-start text-white ",
        )}
      >
        <Image
          height={48}
          width={48}
          src={avatar}
          alt={name}
          className="rounded-full"
          unoptimized
        />
        <div className="flex items-center gap-1 overflow-hidden">
          <p className="text-lg leading-tight truncate">{name}</p>
          <ArrowDown
            className={`w-5 h-4 transition-transform duration-200 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      <DropDownMenu
        isOpen={isMenuOpen}
        options={options}
        onSelectOption={handleSelectOption}
      />
    </div>
  );
}
