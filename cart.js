const houses = [
    {
        id: 1,
        price: "4,000,000",
        location: "Lavington",
        details: "A beautiful 8-bedroom house with a garden.",
    },
    {
        id: 2,
        price: "4,000,000",
        location: "Kileleshwa",
        details: "A beautiful 7-bedroom house with a garden.",
    },
    {
        id: 3,
        price: "4,000,000",
        location: "Runda",
        details: "A beautiful 7-bedroom house with a garden.",
    },
    {
        id: 4,
        price: "4,000,000",
        location: "Westlands",
        details: "A beautiful 5-bedroom house with a garden.",
    },
    {
        id: 5,
        price: "4,000,000",
        location: "Kikuyu",
        details: "A beautiful 5-bedroom house with a garden.",
    },
    {
        id: 6,
        price: "4,000,000",
        location: "Membly",
        details: "A beautiful 5-bedroom house with a garden.",
    },
    {
        id: 7,
        price: "4,000,000",
        location: "Tatu city",
        details: "A beautiful 6-bedroom house with a garden.",
    },
    {
        id: 8,
        price: "4,000,000",
        location: "Kitusuru",
        details: "A beautiful 6-bedroom house with a garden.",
    },
    {
        id: 9,
        price: "4,000,000",
        location: "Tigoni",
        details: "A beautiful 6-bedroom house with a garden.",
    }
];
localStorage.setItem("houses",JSON.stringify(houses));
console.log(houses)