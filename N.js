// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    /* ===========================
       1. SCROLL TO TOP BUTTON
    ============================ */

    const topButton = document.createElement("button");
    topButton.innerText = "↑ Top";
    topButton.id = "topBtn";
    document.body.appendChild(topButton);

    topButton.style.position = "fixed";
    topButton.style.bottom = "30px";
    topButton.style.right = "30px";
    topButton.style.padding = "10px 15px";
    topButton.style.backgroundColor = "#3949ab";
    topButton.style.color = "#fff";
    topButton.style.border = "none";
    topButton.style.borderRadius = "5px";
    topButton.style.cursor = "pointer";
    topButton.style.display = "none";

    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ===========================
       2. AUTO TABLE OF CONTENTS
    ============================ */

    const headings = document.querySelectorAll("h2");
    if (headings.length > 0) {

        const toc = document.createElement("div");
        toc.innerHTML = "<h2>Table of Contents</h2>";
        const list = document.createElement("ul");

        headings.forEach((heading, index) => {
            const id = "section-" + index;
            heading.id = id;

            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = "#" + id;
            link.innerText = heading.innerText;

            li.appendChild(link);
            list.appendChild(li);
        });

        toc.appendChild(list);
        document.body.insertBefore(toc, document.body.children[1]);
    }

    /* ===========================
       3. HIGHLIGHT SECTION ON SCROLL
    ============================ */

    window.addEventListener("scroll", function () {
        headings.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 150) {
                section.style.color = "#d32f2f";
            } else {
                section.style.color = "#283593";
            }
        });
    });

    /* ===========================
       4. FADE IN EFFECT
    ============================ */

    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease-in";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});