class Order {
    constructor(
        private orderNr: number,
        private isStudentOrder: boolean,
    ) {}

    public Order(orderNr: number, isStudentOrder: boolean) {
        this.orderNr = orderNr;
        this.isStudentOrder = isStudentOrder;

    }

    

}