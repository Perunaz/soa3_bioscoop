import { Movie } from "../src/Movie";
import { MovieScreening } from "../src/MovieScreening";
import { MovieTicket } from "../src/MovieTicket";
import { Order } from "../src/Order";

test("should detect premium ticket", () => {
	let movie = new Movie("The Matrix");
	let screening = new MovieScreening(movie, new Date(2019, 11, 1, 20, 0), 10);
	let ticket = new MovieTicket(screening, 1, 2, true);
	let order = new Order(1, false);
	order.addSeatReservation(ticket);

	expect(order.calculatePrice()).toBe(13);
});

test("should detect student order", () => {
	let movie = new Movie("The Matrix");
	let screening = new MovieScreening(movie, new Date(2019, 11, 1, 20, 0), 10);
	let ticket = new MovieTicket(screening, 1, 2, false);
	let order = new Order(1, true);
	order.addSeatReservation(ticket);

	expect(order.calculatePrice()).toBe(10);
});
