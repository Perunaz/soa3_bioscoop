class MovieScreening{
    constructor(
        private dateAndTime: Date,
        private pricePerSeat: number,
        private movie: Movie,
    ){}

    public MovieScreening(movie: Movie, dateAndTime: Date, pricePerSeat: number) {
        this.movie = movie;
        this.dateAndTime = dateAndTime;
        this.pricePerSeat = pricePerSeat;
    }

    public getPricePerSeat(): number {
        return this.pricePerSeat;
    }

    public toString(): string {
        return this.movie.toString() + " " + this.dateAndTime.toString();
    }
}