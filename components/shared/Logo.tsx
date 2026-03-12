"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/data/site";

type LogoProps = {
  variant?: "default" | "footer";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 ${className}`}
      aria-label={`${SITE.fullName} - Home`}
    >
      {!imgError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/images/logo.png"
          alt={SITE.fullName}
          width={220}
          height={64}
          className={`w-auto object-contain ${isFooter ? "h-12 opacity-90 md:h-16" : "h-12 md:h-14"}`}
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className={`font-bold tracking-tight ${isFooter ? "text-background" : "text-foreground"}`}
          style={{ fontSize: isFooter ? "1.375rem" : "1.25rem" }}
        >
          {SITE.name}
        </span>
      )}
    </Link>
  );
}
