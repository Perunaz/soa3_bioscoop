import { MovieTicket } from "./MovieTicket";
import { OrderState } from "./OrderState";
import { InitialState } from "./orderStates/InitialState";
import { PayedState } from "./orderStates/PayedState";
import { ProvisionalState } from "./orderStates/ProvisionalState";
import { SubmittedState } from "./orderStates/SubmittedState";
import { TicketExportFormat } from "./TicketExportFormat";

export class Order {
	private initialState: OrderState;
	private payedState: OrderState;
	private provisionalState: OrderState;
	private submittedState: OrderState;

	private orderNr: number;
	private isStudentOrder: boolean;
	private seatReservations: MovieTicket[] = [];
	private _state: OrderState;


	constructor(orderNr: number, isStudentOrder: boolean) {
		this.initialState = new InitialState(this);
		this.payedState = new PayedState(this);
		this.provisionalState = new ProvisionalState(this);
		this.submittedState = new SubmittedState(this);

		this.orderNr = orderNr;
		this.isStudentOrder = isStudentOrder;
		this._state = this.initialState;
	}

	public getOrderNr(): number {
		return this.orderNr;
	}

	public addSeatReservation(ticket: MovieTicket): void {
		this._state.addSeatReservation(ticket);
	}

	public createOrder(): void {
		this._state.createOrder();
	}

	public cancelOrder(): void {
		this._state.cancelOrder();
	}

	public payOrder(): void {
		this._state.payOrder();
	}

	public submitSeatReservation(ticket: MovieTicket): void { 
		this.seatReservations.push(ticket);
	}

	public setState(state: OrderState): void {
		this._state = state;
	}

	public getState(): OrderState {
        return this._state;
    }

	public getStateToString(): string {
        return this._state.constructor.name;
    }

	public getInitialState(): OrderState {
		return this.initialState;
	}

	public getPayedState(): OrderState {
        return this.payedState;
	}
	
	public getProvisionalState(): OrderState {
        return this.provisionalState;
    }

	public getSubmittedState(): OrderState {
		return this.submittedState;
	}

	public calculatePrice(): number {
		var dayOfWeek = this.seatReservations[0].getDateAndTime().getDay();
		var isWeekend = dayOfWeek === 5 || dayOfWeek === 0;
		var price = 0;

		if (this.isStudentOrder || !isWeekend) {
			for (var i = 0; i < this.seatReservations.length; i++) {
				if (i! % 2 == 0) {
					price += this.seatReservations[i]
						.getScreening()
						.getPricePerSeat();
					if (this.seatReservations[i].getPremium()) {
						if (this.isStudentOrder) {
							price += 2;
						} else {
							price += 3;
						}
					}
				}
			}
		} else {
			this.seatReservations.forEach((t) => {
				price += t.getScreening().getPricePerSeat();
				if (t.getPremium()) {
					price += 3;
				}
			});
		}

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
