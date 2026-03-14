"use client";

import { useOrderModal } from "./OrderModalProvider";

export function OrderOnlineCard() {
  const { openOrderModal } = useOrderModal();

  return (
    <button
      type="button"
      onClick={openOrderModal}
      className="flex w-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <h3 className="text-lg font-semibold text-foreground">Order Online</h3>
      <p className="mt-2 text-sm text-muted">Get delivery or pickup</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
        Go →
      </span>
    </button>
  );
}
