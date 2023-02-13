import { OrderState } from "../OrderState";
import { Order } from "../Order";
import { SubmittedState } from "./SubmittedState";
import { MovieTicket } from "../MovieTicket";

export class InitialState implements OrderState {
    private order: Order;

    public constructor(_order: Order) {
        this.order = _order;
    }

    public addSeatReservation(ticket: MovieTicket): void {
        this.order.submitSeatReservation(ticket)
    }

    public cancelOrder(): void {
        console.log("Can cancel order in initial state");
    }

    public payOrder(): void {
        console.log("Cannot pay order in initial state");
    }

    public createOrder(): void {
        console.log("Order created");
        this.order.setState(this.order.getSubmittedState())
    }
}