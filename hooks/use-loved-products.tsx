import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { toast } from "@/components/ui/use-toast";

import { iProduct } from "@/types/typeProducts";

interface LoveProducts {
  lovedItems: iProduct[];
  addLovedItem: (data: iProduct) => void;
  removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(
  persist<LoveProducts>(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data: iProduct) => {
        const currenItems = get().lovedItems;
        const existingItem = currenItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast({
            title: "El producto ya existe en el wishlist.",
            variant: "destructive",
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });
        toast({
          title: "Producto añadido al wishlist 👜",
        });
      },
      removeLovedItem: (id: number) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: "Producto eliminado del wishlist ❌",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
