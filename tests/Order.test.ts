import { Movie } from "../src/Movie";
import { MovieScreening } from "../src/MovieScreening";
import { MovieTicket } from "../src/MovieTicket";
import { Order } from "../src/Order";

const chai = require('chai')
const expect = chai.expect

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('Order Tests', function() {
    describe('Calculate price tests', function() {
        it('should detect premium ticket', async function() {
            let movie = new Movie("The Matrix");
            let screening = new MovieScreening(movie, new Date(2019, 11, 1, 20, 0), 10);
            let ticket = new MovieTicket(screening, 1, 2, true);
            let order = new Order(1, true);
            order.addSeatReservation(ticket);

            expect(order.calculatePrice()).to.be.equal(13);
        })
    })
})
