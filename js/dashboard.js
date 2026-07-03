// ======================================
// CHECK LOGIN
// ======================================

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// ======================================
// WELCOME USER
// ======================================

document.getElementById("userName").textContent =
    loggedInUser.fullName;

// ======================================
// CURRENT DATE
// ======================================

const today = new Date();

document.getElementById("todayDate").textContent =
    today.toLocaleDateString("en-IN", {

        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"

    });

// ======================================
// LOAD DONATIONS
// ======================================

const donations =
    JSON.parse(localStorage.getItem("donations")) || [];

const historyBody =
    document.getElementById("historyBody");

let totalMeals = 0;

if (donations.length === 0) {

    historyBody.innerHTML = `

        <tr>

            <td colspan="4"
                style="text-align:center;padding:30px;">

                No donations yet.

            </td>

        </tr>

    `;

} else {

    donations.reverse().forEach(donation => {

        totalMeals += Number(donation.quantity);

        historyBody.innerHTML += `

        <tr>

            <td>${donation.submittedAt}</td>

            <td>${donation.foodName}</td>

            <td>${donation.category}</td>

            <td>${donation.quantity}</td>

        </tr>

        `;

    });

}

// ======================================
// DASHBOARD STATS
// ======================================

animateCounter(

    "totalDonations",

    donations.length

);

animateCounter(

    "totalMeals",

    totalMeals

);

// ======================================
// COUNTER ANIMATION
// ======================================

function animateCounter(id, target) {

    const element = document.getElementById(id);

    let count = 0;

    const speed = 30;

    const increment =
        Math.ceil(target / 50);

    const timer = setInterval(() => {

        count += increment;

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        element.textContent = count;

    }, speed);

}

// ======================================
// LOGOUT
// ======================================

function logout() {

    if (!confirm("Are you sure you want to logout?")) {

        return;

    }

    localStorage.removeItem("loggedInUser");

    window.location.href = "dashboard.html";

}