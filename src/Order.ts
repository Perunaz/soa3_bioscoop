class Order {
    constructor(
        private orderNr: number,
        private isStudentOrder: boolean,
        private seatReservations: MovieTicket[] = [],
    ) {}

    public Order(orderNr: number, isStudentOrder: boolean) {
        this.orderNr = orderNr;
        this.isStudentOrder = isStudentOrder;

    }

    public getOrderNr(): number {
        return this.orderNr;
    }

    public addSeatReservation(ticket: MovieTicket): void {
        this.seatReservations.push(ticket);
    }

    public calculatePrice(): number {

        return 0;
    }

    public export(exportFormat: TicketExportFormat): void {
        if (exportFormat == TicketExportFormat.PlainText) {
            console.log("PlainText");
        } else {
            console.log("Json");
        }
    }

}