"use client";

import Link from "next/link";
import { cn } from "../lib/cn";

//icon
import { VscHome, VscRepo, VscMail } from "react-icons/vsc";

export default function Navigation() {
  return (
    <div className="size-fit border border-neutral-700 rounded-2xl py-3 px-4 flex gap-8 fixed bottom-10 left-1/2 -translate-x-1/2 bg-black">
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className="flex relative items-center group bg-[#131313]"
        >
          <item.icon className="border border-neutral-500 rounded-xl size-12 p-3 group-hover:scale-110 transition-all ease-out duration-300" />

          <p
            className={cn(
              "absolute bottom-16 left-1/2 -translate-x-1/2 cursor-default",
              "opacity-0 group-hover:opacity-100 pointer-events-none",
              "transition-all ease-out duration-500",
              "inline-block bg-[#060606] px-2 py-1 text-xs font-semibold rounded-md border border-neutral-700",
            )}
            onClick={ignoreLink}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

function ignoreLink(e: React.MouseEvent<HTMLParagraphElement>) {
  e.preventDefault();
}

export const navigation = Object.freeze([
  {
    id: 0,
    name: "Home",
    path: "/",
    icon: VscHome,
  },
  {
    id: 1,
    name: "Profile",
    path: "/profile",
    icon: VscRepo,
  },
  {
    id: 2,
    name: "Contact",
    path: "/contact",
    icon: VscMail,
  },
]);
