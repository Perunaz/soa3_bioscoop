class Order {
    constructor(
        private orderNr: number,
        private isStudentOrder: boolean,
    ) {}

    public Order(orderNr: number, isStudentOrder: boolean) {
        this.orderNr = orderNr;
        this.isStudentOrder = isStudentOrder;

    }

    public getOrderNr(): number {
        return this.orderNr;
    }

    // public addSeatReservation(ticket: MovieTicket): void {
    //     this.seatReservations.push(ticket);
    // }

    public calculatePrice(): number {

        return 0;
    }

}