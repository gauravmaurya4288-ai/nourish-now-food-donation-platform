// =====================================
// SHOW / HIDE PASSWORD
// =====================================

document.querySelectorAll(".togglePassword").forEach(icon => {

    icon.addEventListener("click", () => {

        const input = icon.previousElementSibling;

        if(input.type === "password"){

            input.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

        }else{

            input.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

        }

    });

});

// Login Page Eye Icon

const togglePassword = document.getElementById("togglePassword");

if(togglePassword){

    togglePassword.addEventListener("click",()=>{

        const password=document.getElementById("loginPassword");

        if(password.type==="password"){

            password.type="text";

            togglePassword.classList.replace("fa-eye","fa-eye-slash");

        }else{

            password.type="password";

            togglePassword.classList.replace("fa-eye-slash","fa-eye");

        }

    });

}

// =====================================
// REGISTER
// =====================================

const registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const fullName=document.getElementById("fullName").value.trim();

        const email=document.getElementById("email").value.trim().toLowerCase();

        const phone=document.getElementById("phone").value.trim();

        const userType=document.getElementById("userType").value;

        const password=document.getElementById("password").value;

        const confirmPassword=document.getElementById("confirmPassword").value;

        if(password!==confirmPassword){

            alert("Passwords do not match!");

            return;

        }

        let users=JSON.parse(localStorage.getItem("users")) || [];

        const exists=users.find(user=>user.email===email);

        if(exists){

            alert("User already exists!");

            return;

        }

        users.push({

            fullName,
            email,
            phone,
            userType,
            password

        });

        localStorage.setItem("users",JSON.stringify(users));

        alert("Registration Successful!");

        window.location.href="login.html";

    });

}

// =====================================
// LOGIN
// =====================================

const loginForm=document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const email=document.getElementById("loginEmail").value.trim().toLowerCase();

        const password=document.getElementById("loginPassword").value;

        const users=JSON.parse(localStorage.getItem("users")) || [];

        const user=users.find(u=>u.email===email && u.password===password);

        if(!user){

            alert("Invalid Email or Password");

            return;

        }

        localStorage.setItem("loggedInUser",JSON.stringify(user));

        alert("Login Successful!");

        window.location.href="index.html";

    });

}