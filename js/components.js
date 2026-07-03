document.addEventListener("DOMContentLoaded", async () => {

    // ==========================
    // LOAD NAVBAR
    // ==========================

    const navbarContainer = document.getElementById("navbar");

    if (navbarContainer) {

        try {

            const response = await fetch("./components/navbar.html");

            if (!response.ok) throw new Error("Navbar not found");

            navbarContainer.innerHTML = await response.text();

            // ==========================
            // MOBILE MENU
            // ==========================

            const menu = document.getElementById("menuToggle");
            const nav = document.getElementById("navLinks");

            if (menu && nav) {

                menu.addEventListener("click", () => {

                    nav.classList.toggle("active");

                });

                document.querySelectorAll(".nav-links a").forEach(link => {

                    link.addEventListener("click", () => {

                        nav.classList.remove("active");

                    });

                });

            }

            // ==========================
            // ACTIVE PAGE
            // ==========================

            const currentPage =
                window.location.pathname.split("/").pop() || "index.html";

            document.querySelectorAll(".nav-links a").forEach(link => {

                if (link.getAttribute("href") === currentPage) {

                    link.classList.add("active");

                }

            });

            // ==========================
            // LOGIN / LOGOUT
            // ==========================

            const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

            const loginItem = document.getElementById("loginItem");
            const registerItem = document.getElementById("registerItem");
            const dashboardItem = document.getElementById("dashboardItem");
            const logoutItem = document.getElementById("logoutItem");
            const logoutBtn = document.getElementById("logoutBtn");

            if (loggedUser) {

                if (loginItem) loginItem.style.display = "none";
                if (registerItem) registerItem.style.display = "none";

                if (dashboardItem) dashboardItem.style.display = "block";
                if (logoutItem) logoutItem.style.display = "block";

            } else {

                if (dashboardItem) dashboardItem.style.display = "none";
                if (logoutItem) logoutItem.style.display = "none";

            }

            if (logoutBtn) {

                logoutBtn.addEventListener("click", (e) => {

                    e.preventDefault();

                    localStorage.removeItem("loggedInUser");

                    window.location.href = "login.html";

                });

            }

        } catch (error) {

            console.error("Navbar Error:", error);

        }

    }

    // ==========================
    // LOAD FOOTER
    // ==========================

    const footerContainer = document.getElementById("footer");

    if (footerContainer) {

        try {

            const response = await fetch("./components/footer.html");

            if (!response.ok) throw new Error("Footer not found");

            footerContainer.innerHTML = await response.text();

            const topBtn = document.getElementById("topBtn");

            if (topBtn) {

                window.addEventListener("scroll", () => {

                    topBtn.style.display =
                        window.scrollY > 300 ? "block" : "none";

                });

                topBtn.addEventListener("click", () => {

                    window.scrollTo({

                        top: 0,

                        behavior: "smooth"

                    });

                });

            }

        } catch (error) {

            console.error("Footer Error:", error);

        }

    }

    // ==========================
    // NAVBAR SCROLL EFFECT
    // ==========================

    window.addEventListener("scroll", () => {

        const navbar = document.querySelector(".navbar");

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

});