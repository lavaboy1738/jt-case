export type Tag = "coffee" | "movies" | "utils" | "food" | "groceries";
export type Team = "Bruins" | "Raptors" | "Celtics";

export type Transaction = {
	date: String,
	amountInCents: Number,
	tags: Tag[]
	teams: Team[]
}

export const data: Transaction[] = [
    {
        date: "2021-03-18 2:03:04",
        amountInCents: 3500,
        tags: ["coffee"],
        teams: ["Bruins"]
    },
    {
        date: "2021-03-20 2:03:04",
        amountInCents: 2500,
        tags: ["food", "movies"],
        teams: ["Raptors"]
    },
    {
        date: "2021-03-22 2:03:04",
        amountInCents: 1500,
        tags: ["utils"],
        teams: ["Bruins", "Raptors"]
    },
    {
        date: "2021-03-24 2:03:04",
        amountInCents: 5400,
        tags: ["groceries"],
        teams: ["Celtics"]
    },
    {
        date: "2021-03-26 2:03:04",
        amountInCents: 5200,
        tags: ["coffee", "food", "movies"],
        teams: ["Bruins", "Raptors", "Celtics"]
    },
    {
        date: "2021-04-02 2:03:04",
        amountInCents: 5100,
        tags: ["movies"],
        teams: ["Celtics"]
    },
    {
        date: "2021-04-08 2:03:04",
        amountInCents: 5400,
        tags: ["coffee", "food"],
        teams: ["Raptors"]
    },
    {
        date: "2021-04-10 2:03:04",
        amountInCents: 5200,
        tags: ["food"],
        teams: ["Bruins"]
    },
    {
        date: "2021-04-15 2:03:04",
        amountInCents: 5300,
        tags: ["groceries"],
        teams: ["Celtics", "Raptors"]
    },
    {
        date: "2021-04-17 2:03:04",
        amountInCents: 2500,
        tags: ["coffee"],
        teams: ["Raptors"]
    },
    {
        date: "2021-04-22 2:03:04",
        amountInCents: 1500,
        tags: ["utils"],
        teams: ["Celtics"]
    },
    {
        date: "2021-04-26 2:03:04",
        amountInCents: 5300,
        tags: ["coffee", "food", "movies"],
        teams: ["Bruins", "Celtics"]
    },
    {
        date: "2021-05-03 2:03:04",
        amountInCents: 5800,
        tags: ["movies"],
        teams: ["Raptors"]
    },
    {
        date: "2021-05-04 2:03:04",
        amountInCents: 2500,
        tags: ["food"],
        teams: ["Bruins", "Raptors", "Celtics"]
    },
    {
        date: "2021-05-06 2:03:04",
        amountInCents: 5600,
        tags: ["coffee"],
        teams: ["Bruins"]
    },
    {
        date: "2021-05-10 2:03:04",
        amountInCents: 1300,
        tags: ["utils"],
        teams: ["Raptors"]
    },
    {
        date: "2021-05-12 2:03:04",
        amountInCents: 300,
        tags: ["coffee", "utils"],
        teams: ["Raptors", "Celtics"]
    },
    {
        date: "2021-05-16 2:03:04",
        amountInCents: 1200,
        tags: ["movies", "groceries"],
        teams: ["Bruins", "Raptors", "Celtics"]
    },
    {
        date: "2021-05-18 2:03:04",
        amountInCents: 500,
        tags: ["utils"],
        teams: ["Raptors"]
    },
]