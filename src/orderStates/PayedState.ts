import { Order } from "../Order";
import { OrderState } from "../OrderState";

export class PayedState implements OrderState {
    private order: Order;

    public constructor(_order: Order) {
        this.order = _order;
    }
    
    public addSeatReservation(): void {
        console.log("Cannot edit order in initial state");
    }

    public cancelOrder(): void {
        console.log("Cannot cancel order in initial state");
    }

    public payOrder(): void {
        console.log("Cannot order in initial state");
    }

    public createOrder(): void {
        console.log("Order created");
    }
}