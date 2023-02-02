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
        if(this.isStudentOrder == true || this.seatReservations[0].

            //get date from moviescreening


    }

    public export(exportFormat: TicketExportFormat): void {
        if (exportFormat == TicketExportFormat.PLAINTEXT) {
            console.log("PlainText");
        } else {
            console.log("Json");
        }
    }

}