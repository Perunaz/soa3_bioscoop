import { MovieTicket } from "./MovieTicket";
import { TicketExportFormat } from "./TicketExportFormat";
import { PricingStrategy } from "./strategyPattern/PricingStrategy";
import { StudentPricingStrategy } from "./strategyPattern/StudentPricingStrategy";
import { RegularPricingStrategy } from "./strategyPattern/RegularPricingStrategy";
import { ExportFormatStrategy } from "./strategyPattern/ExportFormatStrategy";
import { PlainTextExportStrategy } from "./strategyPattern/PlainTextExportStrategy";
import { JSONExportStrategy } from "./strategyPattern/JSONExportStrategy";

export class Order {
	public orderNr: number;
	public isStudentOrder: boolean;
	public seatReservations: MovieTicket[] = [];
	private pricingStrategy: PricingStrategy;
	private exportFormatStrategy: ExportFormatStrategy;

	constructor(orderNr: number, isStudentOrder: boolean) {
		this.orderNr = orderNr;
		this.isStudentOrder = isStudentOrder;
		this.pricingStrategy = isStudentOrder
			? new StudentPricingStrategy()
			: new RegularPricingStrategy();
		this.exportFormatStrategy = new PlainTextExportStrategy();
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

	export(isPlainText: boolean): void {
		this.exportFormatStrategy = isPlainText
			? new PlainTextExportStrategy()
			: new JSONExportStrategy();
		console.log(this.exportFormatStrategy.export(this));
	}
}
