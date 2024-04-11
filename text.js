document.addEventListener("DOMContentLoaded", function() {
    const headerData = {
        logo: "Y",
        name: "Hacker News",
        menu: "new | past | comments | ask | show | jobs | submit",
    };

    const headerArticle = document.querySelector("#hnheader .header");

    // Construct the HTML markup using template literals
    headerArticle.innerHTML = `
        <div class="logo">${headerData.logo}</div>
        <div class="name">${headerData.name}</div>
        <div class="menu">${headerData.menu}</div>
    `;
});

document.addEventListener("DOMContentLoaded", function() {
    const items = [
        { id: "001", ranking: "1.", title: "Stacking Triangles for Fun and Profit", subtext: "91 points by olooney 2 hours ago | hide | 36 comments" },
        { id: "002", ranking: "2.", title: "Roll-to-roll fabricated perovskite solar cells under ambient room conditions", subtext: "90 points by gnabgib 6 hours ago | hide | 62 comments" },
        { id: "003", ranking: "3.", title: "ESA Satellites to Test Razor-Sharp Formation Flying", subtext: "85 points by rbanffy 6 hours ago | hide | 19 comments" },
        { id: "004", ranking: "4.", title: "Apple alerts users in 92 nations to mercenary spyware attacks", subtext: "71 points by alwillis 1 hour ago | hide | 17 comments" }
    ];

    items.forEach(itemData => {
        const item = document.getElementById(itemData.id);
        item.innerHTML = `
            <div class="ranking">${itemData.ranking}</div>
            <div class="votelinks">↑</div>
            <div class="title">${itemData.title}</div>
            <div class="subtext">${itemData.subtext}</div>
        `;
    });
});