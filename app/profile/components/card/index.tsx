"use client";

import { cn } from "@/app/lib/cn";
import "./style.css";

type CardProps = {
  title: string;
  description?: string;
  imageSrc: string;
  onClick: () => void;
  onClose: () => void;
  className?: string;
};

export default function Card({
  title,

  className,
}: CardProps) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden", className)}>
      <section className="card absolute inset-0 size-full -z-10"></section>
      {/* <section className="absolute inset-0 size-full backdrop-blur drop-shadow-sm shadow-lg bg-white/30 -z-10"></section> */}
      {/* <section className="absolute inset-0 size-full blur-md bg-white/50 -z-10"></section> */}
      <h1 className="text-2xl font-bold text-neutral-600">{title}</h1>
    </div>
  );
}
