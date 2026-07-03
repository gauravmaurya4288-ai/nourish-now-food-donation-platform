const currentUser =
JSON.parse(localStorage.getItem("loggedInUser"));

if(!currentUser){

window.location.href="login.html";

}

// Load User Data

document.getElementById("profileName").textContent =
currentUser.fullName;

document.getElementById("profileType").textContent =
currentUser.userType;

document.getElementById("fullName").value =
currentUser.fullName;

document.getElementById("email").value =
currentUser.email;

document.getElementById("phone").value =
currentUser.phone;

document.getElementById("userType").value =
currentUser.userType;

// Save Changes

document.getElementById("profileForm")

.addEventListener("submit",function(e){

e.preventDefault();

currentUser.fullName =
document.getElementById("fullName").value;

currentUser.phone =
document.getElementById("phone").value;

currentUser.userType =
document.getElementById("userType").value;

localStorage.setItem(
"loggedInUser",
JSON.stringify(currentUser)
);

// Update users array

let users =
JSON.parse(localStorage.getItem("users")) || [];

users = users.map(user => {

if(user.email === currentUser.email){

return currentUser;

}

return user;

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("Profile Updated Successfully!");

});