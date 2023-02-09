import { MovieTicket } from "./MovieTicket";
import { TicketExportFormat } from "./TicketExportFormat";
import { PricingStrategy } from "./strategyPattern/PricingStrategy";
import { StudentPricingStrategy } from "./strategyPattern/StudentPricingStrategy";
import { RegularPricingStrategy } from "./strategyPattern/RegularPricingStrategy";

export class Order {
	private orderNr: number;
	private isStudentOrder: boolean;
	public seatReservations: MovieTicket[] = [];
	private pricingStrategy: PricingStrategy;

	constructor(orderNr: number, isStudentOrder: boolean) {
		this.orderNr = orderNr;
		this.isStudentOrder = isStudentOrder;
		this.pricingStrategy = isStudentOrder
			? new StudentPricingStrategy()
			: new RegularPricingStrategy();
	}

	public getOrderNr(): number {
		return this.orderNr;
	}

	public addSeatReservation(ticket: MovieTicket): void {
		this.seatReservations.push(ticket);
	}

	public calculatePrice(): number {
		let dayOfWeek = this.seatReservations[0].getDateAndTime().getDay();
		let isWeekend = dayOfWeek === 5 || dayOfWeek === 0;

		let price = this.pricingStrategy.calculatePrice(this);

		if (
			isWeekend &&
			this.isStudentOrder &&
			this.seatReservations.length >= 6
		) {
			price = price * 0.9;
		}

		return price;
	}

	public export(exportFormat: TicketExportFormat): void {
		if (exportFormat == TicketExportFormat.PLAINTEXT) {
			let plaintext = `Order nr: ${this.orderNr}\n`;
			plaintext += `Student order: ${this.isStudentOrder}\n`;
			plaintext += `Seat reservations:\n`;
			for (const ticket of this.seatReservations) {
				plaintext += `   Info: ${ticket.toString()}\n`;
			}
			plaintext += `   Price: ${this.calculatePrice()}\n`;
			console.log(plaintext);
		} else {
			const json = {
				orderNr: this.orderNr,
				isStudentOrder: this.isStudentOrder,
				seatReservations: this.seatReservations,
				totalPrice: this.calculatePrice(),
			};
			console.log(JSON.stringify(json));
		}
	}
}
