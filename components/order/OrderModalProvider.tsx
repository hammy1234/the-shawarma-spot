"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { OrderModal } from "./OrderModal";

type OrderModalContextType = {
  openOrderModal: () => void;
};

const OrderModalContext = createContext<OrderModalContextType | null>(null);

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) {
    throw new Error("useOrderModal must be used within OrderModalProvider");
  }
  return ctx;
}

export function OrderModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openOrderModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <OrderModalContext.Provider value={{ openOrderModal }}>
      {children}
      <OrderModal isOpen={isOpen} onClose={closeModal} />
    </OrderModalContext.Provider>
  );
}
