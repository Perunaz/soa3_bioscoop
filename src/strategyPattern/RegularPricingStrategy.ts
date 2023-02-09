import { Order } from "../Order";
import { PricingStrategy } from "./PricingStrategy";

export class RegularPricingStrategy implements PricingStrategy {
	calculatePrice(order: Order): number {
		let price = 0;
		order.seatReservations.forEach((reservation) => {
			price += reservation.getScreening().getPricePerSeat();
			if (reservation.getPremium()) {
				price += 3;
			}
		});
		return price;
	}
}
