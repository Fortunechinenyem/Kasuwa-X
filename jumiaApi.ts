// jumiaApi.ts
import axios from "axios";

const jumiaApi = axios.create({
  baseURL: "https://jumia-service.p.rapidapi.com/api",
  headers: {
    "X-RapidAPI-Key": "58fe0dca4emsh89311a4479610ebp1972d6jsne44c612ea930",
    "X-RapidAPI-Host": "jumia-service.p.rapidapi.com",
  },
});

export const searchProducts = async (query: string, limit: number) => {
  try {
    const response = await jumiaApi.get(`/product/search/${query}/${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

export const getProductDetails = async (productId: string) => {
  try {
    const response = await jumiaApi.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

export const getCategoryProducts = async (category: string) => {
  try {
    const response = await jumiaApi.get(`/category/${category}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category products:", error);
    throw error;
  }
};
