"use client";

import { useOrderModal } from "./OrderModalProvider";

type OrderOnlineButtonProps = {
  /** Button style: "primary" (default) or "link" (for footer/list links) */
  variant?: "primary" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  /** Callback when clicked (e.g. to close mobile nav) */
  onClick?: () => void;
};

const sizeStyles = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-6 text-base rounded-xl min-h-[44px]",
  lg: "h-12 px-8 text-lg rounded-xl min-h-[48px]",
} as const;

export function OrderOnlineButton({
  variant = "primary",
  size = "md",
  className = "",
  children = "Order Online",
  onClick,
}: OrderOnlineButtonProps) {
  const { openOrderModal } = useOrderModal();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openOrderModal();
    onClick?.();
  };

  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  if (variant === "link") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`${baseStyles} text-sm text-white/80 hover:text-primary transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }

  const buttonStyles = `${baseStyles} bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm ${sizeStyles[size]} ${className}`;

  return (
    <button type="button" onClick={handleClick} className={buttonStyles}>
      {children}
    </button>
  );
}
