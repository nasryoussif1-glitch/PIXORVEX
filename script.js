// ==========================
// PIXORVEX — Interactive UI
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navItems = document.querySelectorAll(".nav-link");
    const yearElement = document.getElementById("year");

    // Current year
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mobile navigation
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after selecting a section
    navItems.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Highlight the active navigation section
    const sections = document.querySelectorAll("main section[id]");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                navItems.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });

            });

        }, {
            rootMargin: "-25% 0px -60% 0px"
        });

        sections.forEach((section) => observer.observe(section));
    }

    // Small interaction for project cards
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.style.setProperty("--hover-state", "1");
        });

        card.addEventListener("mouseleave", () => {
            card.style.setProperty("--hover-state", "0");
        });

    });

    console.log("PIXORVEX initialized successfully.");
});
```
