import { MovieTicket } from "./MovieTicket";

export interface OrderState {
    addSeatReservation(ticket?: MovieTicket): void;
    cancelOrder(): void;
    payOrder(): void;
    createOrder(): void;
}