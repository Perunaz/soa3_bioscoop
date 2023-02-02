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
        var dayOfWeek = this.seatReservations[0].getDateTime().getDay();
        var isWeekend = (dayOfWeek === 5) || (dayOfWeek  === 0);
        var price = 0;

        if (this.isStudentOrder || !isWeekend) {
            for(var i = 0; i < this.seatReservations.length; i++) { 
                if(i !% 2 == 0) { 
                    price += this.seatReservations[i].getPrice();
                    if(this.seatReservations[i].getPremium()) { 
                        if(this.isStudentOrder) { 
                            price += 2;
                        } else {
                            price += 3;
                        }
                    }
                }
            }
        } else {
            this.seatReservations.forEach( t => {
                price += t.getPrice()
                if(t.getPremium()) {
                    price += 3;
                }
            });
        }

        if(isWeekend && this.isStudentOrder && this.seatReservations.length >= 6) {
            price = price * 0.9
        }

        return price;
    }

    public export(exportFormat: TicketExportFormat): void {
        if (exportFormat == TicketExportFormat.PLAINTEXT) {
            console.log("PlainText");
        } else {
            console.log("Json");
        }
    }

}