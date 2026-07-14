// This file handles the Settings page.
// It lets the user pick a theme and saves their choice.
// It also opens and closes the info popups (About, Privacy, Sources, Tips).

const themeCards = document.querySelectorAll(".theme-card");
const activeThemeName = document.getElementById("activeThemeName");
const themes = ["lavender", "cotton", "strawberry", "blush", "rose", "galaxy"];

// Change the page theme and save the choice so it stays after refresh
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
}

// When the user clicks a theme card, mark it as selected and apply the theme
themeCards.forEach(card => {
    card.addEventListener("click", () => {
        themeCards.forEach(c => c.classList.remove("active-theme"));
        card.classList.add("active-theme");
        const theme = card.dataset.theme;
        applyTheme(theme);
        activeThemeName.textContent = card.querySelector("h3").textContent;
    });
});

// When the page loads, restore the theme the user picked last time
const selectedTheme = localStorage.getItem("selectedTheme");
if (selectedTheme && themes.includes(selectedTheme)) {
    applyTheme(selectedTheme);
    const activeCard = document.querySelector(`.theme-card[data-theme="${selectedTheme}"]`);
    if (activeCard) {
        themeCards.forEach(c => c.classList.remove("active-theme"));
        activeCard.classList.add("active-theme");
        activeThemeName.textContent = activeCard.querySelector("h3").textContent;
    }
}

// Get all info cards, modal overlays, and close buttons from the page
const infoCards = document.querySelectorAll(".info-card");
const modals = document.querySelectorAll(".modal-overlay");
const modalCloseBtns = document.querySelectorAll(".modal-close");

// Title text for each popup, matched by the card's data-modal value
const modalTitles = {
    "about": "ℹ️ About Quotiva",
    "privacy": "🔒 Privacy Policy",
    "sources": "🌍 Quote Sources",
    "tips": "💡 Daily Inspiration Tips"
};

// Body text for each popup, matched by the card's data-modal value
const modalContents = {
    "about": `
        <p>Quotiva is your daily companion for inspiration, motivation, and wisdom.</p>
        <p>Built with love to bring you carefully curated quotes from around the world. Whether you need a boost of confidence, a moment of reflection, or just a smile — Quotiva has something for you.</p>
        <p>Version 1.0<br>Made with ❤️</p>
    `,
    "privacy": `
        <p>Your privacy matters to us. Quotiva is designed to respect your data.</p>
        <p><strong>Data Storage:</strong> All your favorites and theme preferences are stored locally on your device using localStorage. No data is sent to any server.</p>
        <p><strong>Cookies:</strong> We do not use tracking cookies or third-party analytics.</p>
        <p><strong>Third Parties:</strong> We do not share, sell, or rent your personal information to anyone.</p>
    `,
    "sources": `
        <p>Quotes in Quotiva are gathered from public domain sources, famous literature, and renowned thinkers throughout history.</p>
        <p>Categories include:</p>
        <p>• Motivation & Success<br>• Life & Wisdom<br>• Love & Friendship<br>• Happiness & Study <br>• Growth</p>
        <p>We constantly update our collection to bring you fresh perspectives.</p>
    `,
    "tips": `
        <p><strong>Tip 1:</strong> Read your quote aloud each morning for better retention.</p>
        <p><strong>Tip 2:</strong> Save quotes that resonate with you — revisit them when you need a boost.</p>
        <p><strong>Tip 3:</strong> Share a quote with a friend to spread positivity.</p>
        <p><strong>Tip 4:</strong> Try a new category every day to explore different perspectives.</p>
        <p><strong>Tip 5:</strong> Use the New Quote button to discover unexpected wisdom.</p>
    `
};

// When the user clicks an info card, fill the matching popup with content and show it
infoCards.forEach(card => {
    card.addEventListener("click", () => {
        const modalType = card.dataset.modal;
        const modal = document.getElementById(modalType);
        if (modal) {
            modal.querySelector("h2").textContent = modalTitles[modalType];
            modal.querySelector(".modal-content-body").innerHTML = modalContents[modalType];
            modal.classList.add("active");
        }
    });
});

// When the user clicks the X button, close all open popups
modalCloseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modals.forEach(m => m.classList.remove("active"));
    });
});

// When the user clicks the dark background behind a popup, close that popup
modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});
