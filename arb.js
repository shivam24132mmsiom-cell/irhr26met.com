document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll for internal links (future-ready)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    // Highlight sections when visible
    const sections = document.querySelectorAll(".content-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.borderLeft =
                    "6px solid #dc2424";
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});
