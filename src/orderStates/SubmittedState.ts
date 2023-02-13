import { OrderState } from "../OrderState";

export class SubmittedState implements OrderState {
    public EditOrder(): void {
        console.log("Cannot edit order in initial state");
    }

    public CancelOrder(): void {
        console.log("Cannot cancel order in initial state");
    }

    public Order(): void {
        console.log("Cannot order in initial state");
    }

    public CreateOrder(): void {
        console.log("Order created");
    }
}