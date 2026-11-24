/* ==========================================
   BEMI TECHNOLOGIES
   Main JavaScript File
========================================== */
/*
document.addEventListener("DOMContentLoaded", function () {

    // 1. Select the mobile menu button and navigation
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    // 2. Open and close the mobile navigation
    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("show");

            // Update accessibility information
            menuBtn.setAttribute("aria-expanded", isOpen);

            // Change the menu icon
            menuBtn.textContent = isOpen ? "✕" : "☰";

            // Update the button description
            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
       
    
 });// Hide the loading screen after the page finishes loading
    window.addEventListener("load", function () {
        const pageLoader = document.getElementById("pageLoader");

        if (pageLoader) {
            pageLoader.classList.add("loader-hidden");

            setTimeout(function () {
                pageLoader.remove();
            }, 600);
        }
    });

        // Close the menu when a navigation link is clicked
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("show");

                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open navigation");
                menuBtn.textContent = "☰";
            });
        });

        // Close the mobile menu when returning to desktop width
        window.addEventListener("resize", function () {
            if (window.innerWidth > 768) {
                navMenu.classList.remove("show");

                menuBtn.setAttribute("aria-expanded", "false");
                menuBtn.setAttribute("aria-label", "Open navigation");
                menuBtn.textContent = "☰";
            }
        });
    }

    // 3. Automatically update the copyright year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});

*/