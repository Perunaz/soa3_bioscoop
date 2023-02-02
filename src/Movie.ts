//make class movie
class Movie {

    private title: string
    private screenings: MovieScreening[] = []

    constructor(title: string) {
        this.title = title;
    }

    public addScreening(screening: MovieScreening): void {
        this.screenings.push(screening);
    }

    public toString(): string {
        return this.title;
    }
}