import { Order } from "../Order";

export interface PricingStrategy {
	calculatePrice(order: Order): number;
}
