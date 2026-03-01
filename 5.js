document.addEventListener("DOMContentLoaded", function () {

    const adrTypes = [
        {
            title: "Arbitration",
            description: "A dispute resolution method where an independent arbitrator gives a binding decision after hearing both parties.",
            link: "arbitration.html"
        },
        {
            title: "Mediation",
            description: "A voluntary and confidential process where a neutral mediator helps parties reach a mutually acceptable settlement.",
            link: "mediation.html"
        },
        {
            title: "Conciliation",
            description: "A conciliator actively assists disputing parties by suggesting solutions to resolve the conflict amicably.",
            link: "conciliation.html"
        },
        {
            title: "Negotiation",
            description: "An informal process where parties discuss directly to resolve disputes without third-party involvement.",
            link: "N.html"
        },
        {
            title: "Lok Adalat",
            description: "A statutory forum for speedy settlement through compromise.",
            link: "lok-adalat.html"
        }
    ];

    const cardContainer = document.getElementById("adrCards");

    adrTypes.forEach(type => {

        // Create anchor tag (for new tab navigation)
        const link = document.createElement("a");
        link.href = type.link;
        link.target = "_blank";   // 👈 Opens in new tab
        link.classList.add("card-link");

        // Create card
        const card = document.createElement("div");
        card.classList.add("topic-card");

        card.innerHTML = `
            <h3>${type.title}</h3>
            <p>${type.description}</p>
        `;

        // Nest card inside link
        link.appendChild(card);
        cardContainer.appendChild(link);
    });

});
