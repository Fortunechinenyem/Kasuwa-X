import axios from "axios";
import { Order } from "../order";

const API_BASE_URL = "your-api-base-url";

export const orderService = {
  createOrder: async (order: Order): Promise<Order> => {
    const response = await axios.post(`${API_BASE_URL}/api/orders`, order);
    return response.data;
  },

  getOrderHistory: async (userId: string): Promise<Order[]> => {
    const response = await axios.get(`${API_BASE_URL}/api/orders/${userId}`);
    return response.data;
  },
};
