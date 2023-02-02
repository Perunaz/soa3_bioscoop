import { Movie } from "./Movie";
import { MovieScreening } from "./MovieScreening";
import { MovieTicket } from "./MovieTicket";
import { Order } from "./Order";
import { TicketExportFormat } from "./TicketExportFormat";

//make a new movie
let movie = new Movie("The Matrix");
//make a new screening
let screening = new MovieScreening(movie, new Date(2019, 11, 1, 20, 0), 10);
//make a new MovieTicket
let ticket1 = new MovieTicket(screening, 1, 1, false);
let ticket2 = new MovieTicket(screening, 1, 2, true);
let ticket3 = new MovieTicket(screening, 1, 3, true);
let ticket4 = new MovieTicket(screening, 1, 3, true);
let ticket5 = new MovieTicket(screening, 1, 3, true);
let ticket6 = new MovieTicket(screening, 1, 3, true);
//make a new order
let order = new Order(1, true);
//add the ticket to the order
order.addSeatReservation(ticket1);
order.addSeatReservation(ticket2);
order.addSeatReservation(ticket3);
order.addSeatReservation(ticket4);
order.addSeatReservation(ticket5);
order.addSeatReservation(ticket6);

//calculate the price
console.log(order.calculatePrice());

//export the order
order.export(TicketExportFormat.PLAINTEXT);

//export the order
order.export(TicketExportFormat.JSON);
