import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className, name, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-white ",
      )}
    >
      <Image height={48} width={48} src={avatar} alt="logo" unoptimized />
      <div className="overflow-hidden">
        <p className="text-lg leading-tight truncate">{name}</p>
        <button className="text-sm text-red-500 leading-tight hover:underline">
          Log out
        </button>
      </div>
    </div>
  );
}
