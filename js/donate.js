// ================================
// DOM Elements
// ================================

const donateForm = document.getElementById("donateForm");
const imageInput = document.getElementById("foodImage");

// ================================
// Image Preview
// ================================

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        let preview = document.getElementById("imagePreview");

        if (!preview) {

            preview = document.createElement("img");

            preview.id = "imagePreview";

            preview.style.width = "220px";
            preview.style.marginTop = "20px";
            preview.style.borderRadius = "15px";
            preview.style.display = "block";
            preview.style.objectFit = "cover";
            preview.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

            imageInput.parentElement.appendChild(preview);

        }

        preview.src = e.target.result;

    }

    reader.readAsDataURL(file);

});

// ================================
// Form Validation
// ================================

donateForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const donation = {

        donorName: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        organization: document.getElementById("organization").value.trim(),

        foodName: document.getElementById("foodName").value.trim(),

        category: document.getElementById("category").value,

        quantity: document.getElementById("quantity").value,

        weight: document.getElementById("weight").value,

        address: document.getElementById("address").value.trim(),

        notes: document.getElementById("notes").value.trim(),

        submittedAt: new Date().toLocaleString()

    };

    // Email Validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(donation.email)) {

        showPopup(
            "Please enter a valid email address.",
            false
        );

        return;

    }

    // Phone Validation

    if (donation.phone.length < 10) {

        showPopup(
            "Please enter a valid phone number.",
            false
        );

        return;

    }

    // Quantity Validation

    if (donation.quantity <= 0) {

        showPopup(
            "Quantity should be greater than zero.",
            false
        );

        return;

    }

    // Save to Local Storage

    let donations =
        JSON.parse(localStorage.getItem("donations")) || [];

    donations.push(donation);

    localStorage.setItem(
        "donations",
        JSON.stringify(donations)
    );

    // Success Popup

    showPopup(
    "Donation Submitted Successfully!",
    true
    );

    setTimeout(()=>{

        window.location.href="donate-success.html";

    },2000);

    

    donateForm.reset();

    const preview =
        document.getElementById("imagePreview");

    if (preview) preview.remove();

});


// ================================
// Popup
// ================================

function showPopup(message, success) {

    let popup = document.getElementById("popup");

    if (!popup) {

        popup = document.createElement("div");

        popup.id = "popup";

        document.body.appendChild(popup);

    }

    popup.innerHTML = `
        <div class="popup-box">

            <i class="fas ${
                success
                ? "fa-check-circle"
                : "fa-circle-xmark"
            }"></i>

            <h2>${success ? "Success" : "Oops!"}</h2>

            <p>${message}</p>

            <button onclick="closePopup()">

                OK

            </button>

        </div>
    `;

    popup.style.display = "flex";

}

function closePopup(){

    document.getElementById("popup").style.display="none";

}

