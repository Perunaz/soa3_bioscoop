import { Movie } from "./Movie";

export class MovieScreening {
	private dateAndTime: Date;
	private pricePerSeat: number;
	private movie: Movie;

	constructor(movie: Movie, dateAndTime: Date, pricePerSeat: number) {
		this.movie = movie;
		this.dateAndTime = dateAndTime;
		this.pricePerSeat = pricePerSeat;
	}

	public getPricePerSeat(): number {
		return this.pricePerSeat;
	}

	public getDateTime(): Date {
		return this.dateAndTime;
	}

	public toString(): string {
		return this.movie.toString() + ", Date: " + this.dateAndTime.toString();
	}
}
