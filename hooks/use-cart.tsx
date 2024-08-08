import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { toast } from "@/components/ui/use-toast";

import { iProduct } from "@/types/typeProducts";

interface CartStore {
  items: iProduct[];
  addItem: (data: iProduct) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: iProduct) => {
        const currenItems = get().items;
        const existingItem = currenItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({
            title: "El producto ya existe en el carrito.",
            variant: "destructive",
          });
        }

        set({
          items: [...get().items, data],
        });
        toast({
          title: "Producto añadido al carrito 👜",
        });
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast({
          title: "Producto eliminado del carrito ❌",
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
