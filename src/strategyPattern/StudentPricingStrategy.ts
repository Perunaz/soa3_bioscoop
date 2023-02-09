import { Order } from "../Order";
import { PricingStrategy } from "./PricingStrategy";

export class StudentPricingStrategy implements PricingStrategy {
	calculatePrice(order: Order): number {
		let price = 0;
		order.seatReservations.forEach((reservation) => {
			price += reservation.getScreening().getPricePerSeat();
			if (reservation.getPremium()) {
				price += 2;
			}
		});
		return price;
	}
}
