//make class movie
class Movie {
    constructor(
        private title: string,
        private screenings: MovieScreening[] = [],
    ) {}

    public Movie(title: string) {
        this.title = title;
    }

    public addScreening(screening: MovieScreening): void {
        this.screenings.push(screening);
    }

    public toString(): string {
        return this.title;
    }
}