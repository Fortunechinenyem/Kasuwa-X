export const fetchData = {
  allProducts: async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  singleProduct: async (productId: number) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`);

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  search: async (query: string) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  categories: async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  productsByCategory: async (category: string) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  addProduct: async (productData: any) => {
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        throw new Error(`Failed to add product. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  deleteProduct: async (productId: number) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Failed to delete product. Status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};

export const fetchCategoryProducts = async (category: string) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const json = await res.json();
    console.log(`${category} Products:`, json);
    return json;
  } catch (error) {
    console.error(`Error fetching ${category} products:`, error);
    throw error;
  }
};
