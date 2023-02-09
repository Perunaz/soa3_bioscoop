import { ExportFormatStrategy } from "./ExportFormatStrategy";
import { Order } from "../Order";

export class JSONExportStrategy implements ExportFormatStrategy {
	export(order: Order): string {
		const json = {
			orderNr: order.orderNr,
			isStudentOrder: order.isStudentOrder,
			seatReservations: order.seatReservations,
			totalPrice: order.calculatePrice(),
		};
		return JSON.stringify(json);
	}
}
