import { MovieScreening } from "./MovieScreening";

export class MovieTicket {
	private rowNr: number;
	private seatNr: number;
	private isPremium: boolean;
	private movieScreening: MovieScreening;

	constructor(
		movieScreening: MovieScreening,
		rowNr: number,
		seatNr: number,
		isPremium: boolean
	) {
		this.rowNr = rowNr;
		this.seatNr = seatNr;
		this.isPremium = isPremium;
		this.movieScreening = movieScreening;
	}

	getPremium() {
		return this.isPremium;
	}

	getScreening() {
		return this.movieScreening;
	}

	public getDateAndTime(): Date {
		return this.movieScreening.getDateTime();
	}

	public toString(): string {
		return (
			"movie: " +
			this.movieScreening.toString() +
			", row: " +
			this.rowNr +
			", seat: " +
			this.seatNr +
			", premium: " +
			this.isPremium
		);
	}
}
