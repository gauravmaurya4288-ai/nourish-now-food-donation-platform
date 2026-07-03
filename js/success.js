const donations =
JSON.parse(localStorage.getItem("donations")) || [];

const latest =
donations[donations.length - 1];

if(latest){

    document.getElementById("donorName").textContent =
    latest.donorName;

    document.getElementById("foodName").textContent =
    latest.foodName;

    document.getElementById("category").textContent =
    latest.category;

    document.getElementById("quantity").textContent =
    latest.quantity;

}