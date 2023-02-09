import { Order } from "../Order";

export interface ExportFormatStrategy {
	export(order: Order): string;
}
