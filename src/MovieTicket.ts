class MovieTicket {
    constructor(
        private rowNr: number,
        private seatNr: number,
        private isPremium: boolean,
        private movieScreening: MovieScreening,
    ) {}

    public MovieTicket(movieScreening: MovieScreening, rowNr: number, seatNr: number, isPremium: boolean) {
        this.rowNr = rowNr;
        this.seatNr = seatNr;
        this.isPremium = isPremium;
        this.movieScreening = movieScreening;
    }

    public getPricePerSeat(): number {
        return this.movieScreening.getPricePerSeat();
    }

    public toString(): string {
        return this.movieScreening.toString() + " " + this.rowNr + " " + this.seatNr + " " + this.isPremium;
    }
}