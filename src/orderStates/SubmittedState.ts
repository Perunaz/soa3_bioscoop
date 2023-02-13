import { MovieTicket } from "../MovieTicket";
import { Order } from "../Order";
import { OrderState } from "../OrderState";
import { PayedState } from "./PayedState";

export class SubmittedState implements OrderState {
    private order: Order;

    public constructor(_order: Order) {
        this.order = _order;
    }

    public addSeatReservation(ticket: MovieTicket): void {
        this.order.submitSeatReservation(ticket)
    }

    public cancelOrder(): void {
        console.log("Can cancel order in submitted state");
    }

    public payOrder(): void {
        console.log("Can pay order in submitted state");
        this.order.setState(this.order.getPayedState());
    }

    public createOrder(): void {
        console.log("Cannot create order");
    }
}