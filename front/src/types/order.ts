import { IOrderItem } from "./orderItems";

export interface IOrder {
  id: number;
  name: string;
  email: string;
  total: number;
  order_items: IOrderItem[];
}
