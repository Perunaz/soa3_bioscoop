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
        if (exportFormat == TicketExportFormat.PLAINTEXT) {
            let plaintext = `Order nr: ${this.orderNr}\n`;
            plaintext += `Student order: ${this.isStudentOrder}\n`;
            plaintext += `Seat reservations:\n`;
            for (const ticket of this.seatReservations) {
                plaintext += `   Info: ${ticket.toString()}\n`;
                plaintext += `   Date: ${ticket.getScreening().toString()}\n`;
            }
            console.log(plaintext);
        } else {
            const json = {
                orderNr: this.orderNr,
                isStudentOrder: this.isStudentOrder,
                seatReservations: this.seatReservations.map(ticket => {
                    return {
                        ticketNumber: ticket.toString(),
                        screening: ticket.getScreening().toString(),
                    };
                }),
            };
            console.log(JSON.stringify(json));
        }
    }

}