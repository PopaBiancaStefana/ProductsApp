import { create } from "zustand";
import Product from "../models/Product";

interface ProductStore {
  products: Product[];
  favorites: Product[];
  fetchProducts: () => Promise<void>;
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  favorites: [],

  fetchProducts: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data: Product[] = await response.json();
      console.log(data);
      set({ products: data });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },

  addFavorite: (product: Product) => {
    set((state) => {
      if (state.favorites.some((item) => item.id === product.id)) {
        return {};
      }
      return { favorites: [...state.favorites, product] };
    });
  },

  removeFavorite: (productId: string) => {
    set((state) => ({
      favorites: state.favorites.filter((product) => product.id !== productId),
    }));
  },
}));