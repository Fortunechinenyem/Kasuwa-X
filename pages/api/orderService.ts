import axios from "axios";
import { OrderData } from "../order";

const API_BASE_URL = "your-api-base-url";

export const orderService = {
  createOrder: async (order: OrderData): Promise<OrderData> => {
    const response = await axios.post(`${API_BASE_URL}/api/orders`, order);
    return response.data;
  },

  getOrderHistory: async (userId: string): Promise<OrderData[]> => {
    const response = await axios.get(`${API_BASE_URL}/api/orders/${userId}`);
    return response.data;
  },
};
