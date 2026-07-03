const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target.toLocaleString() + "+";

        }

    };

    updateCounter();

});

// ================= BACK TO TOP =================

document.addEventListener("DOMContentLoaded",()=>{

    const topBtn=document.getElementById("topBtn");

    if(topBtn){

        window.addEventListener("scroll",()=>{

            topBtn.style.display=
                window.scrollY>300?"block":"none";

        });

        topBtn.onclick=()=>{

            window.scrollTo({
                top:0,
                behavior:"smooth"
            });

        };

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

const currentUser=JSON.parse(localStorage.getItem("loggedInUser"));

if(currentUser){

    console.log("Welcome",currentUser.fullName);

}