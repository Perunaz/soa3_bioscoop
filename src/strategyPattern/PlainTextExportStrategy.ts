import { ExportFormatStrategy } from "./ExportFormatStrategy";
import { Order } from "../Order";

export class PlainTextExportStrategy implements ExportFormatStrategy {
	export(order: Order): string {
		let plaintext = `Order nr: ${order.orderNr}\n`;
		plaintext += `Student order: ${order.isStudentOrder}\n`;
		plaintext += `Seat reservations:\n`;
		for (const ticket of order.seatReservations) {
			plaintext += `   Info: ${ticket.toString()}\n`;
		}
		plaintext += `   Price: ${order.calculatePrice()}\n`;
		return plaintext;
	}
}
