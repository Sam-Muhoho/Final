// Creating the houses details
const house1 =[
    {
        House: 1,
        price:"8,000,000",
        location: "Lavington",
        details: "A beautiful 8-bedroom house with a garden.",
    }
];
const house2 =[
    {
        House: 2,
        price: "7,000,000",
        location: "Kileleshwa",
        details: "A beautiful 7-bedroom house with a garden.",
    }
];
const house3 = [
    {
        House: 3,
        price: "9,000,000",
        location: "Runda",
        details: "A beautiful 7-bedroom house with a garden.",
    }
];
const house4 =[
    {
        House: 4,
        price: "5,000,000",
        location: "Westlands",
        details: "A beautiful 5-bedroom house with a garden.",
    }
];
const house5 =[
    {
        House: 5,
        price: "4,000,000",
        location: "Kikuyu",
        details: "A beautiful 5-bedroom house with a garden.",
    }
];
const house6 =[
    {
        House: 6,
        price: "3,000,000",
        location: "Membly",
        details: "A beautiful 5-bedroom house with a garden.",
    }
];
const house7 =[
    {
        House: 7,
        price: "2,200,000",
        location: "Tatu city",
        details: "A beautiful 6-bedroom house with a garden.",
    }
];
const house8 =[
    {
        House: 8,
        price: "2,000,000",
        location: "Kitusuru",
        details: "A beautiful 6-bedroom house with a garden.",
    }
];
const house9 =[
    {
        House: 9,
        price: "1,700,000",
        location: "Tigoni",
        details: "A beautiful 6-bedroom house with a garden.",
    }
];

// Adding to local storage
localStorage.setItem("house1", JSON.stringify(house1));
localStorage.setItem("house2", JSON.stringify(house2));
localStorage.setItem("house3", JSON.stringify(house3));
localStorage.setItem("house4", JSON.stringify(house4));
localStorage.setItem("house5", JSON.stringify(house5));
localStorage.setItem("house6", JSON.stringify(house6));
localStorage.setItem("house7", JSON.stringify(house7));
localStorage.setItem("house8", JSON.stringify(house8));
localStorage.setItem("house9", JSON.stringify(house9));

//get house container
const houses= document.querySelectorAll('.pic')
console.log(houses)
const details=document.querySelector('house-details')
console.log(details)



let details1=document.createElement('div')
    details1.textContent=localStorage.getItem('house1')
housedetails.appendChild(details1)

let details2=document.createElement('div')
    details2.textContent=localStorage.getItem('house2')
housedetails.appendChild(details2)

let details3=document.createElement('div')
    details3.textContent=localStorage.getItem('house3')
housedetails.appendChild(details3)

let details4=document.createElement('div')
    details4.textContent=localStorage.getItem('house4')
housedetails.appendChild(details4)

let details5=document.createElement('div')
    details5.textContent=localStorage.getItem('house5')
housedetails.appendChild(details5)

let details6=document.createElement('div')
    details6.textContent=localStorage.getItem('house6')
housedetails.appendChild(details6)

let details7=document.createElement('div')
    details7.textContent=localStorage.getItem('house7')
housedetails.appendChild(details7)

let details8=document.createElement('div')
    details8.textContent=localStorage.getItem('house8')
housedetails.appendChild(details8)

let details9=document.createElement('div')
    details9.textContent=localStorage.getItem('house9')
housedetails.appendChild(details9)




