// This file handles the Favorites page.
// It reads saved quotes from the browser storage and shows them as cards.
// Each card has a Remove button so the user can delete it.

const favoritesList = document.getElementById("favoritesList");

// Read all saved favorites and display them on the page.
// If there are no favorites yet, show a friendly empty message.
function loadFavorites(){
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favoritesList.innerHTML = "";

    if(favorites.length === 0){
        favoritesList.innerHTML = `
            <p class="empty-message">No favorite quotes yet ❤️</p>
        `;
        return;
    }

    // Create a card for each saved quote and add it to the page
    favorites.forEach((quote, index) => {
        const card = document.createElement("div");
        card.classList.add("favorite-card");

        card.innerHTML = `
            <p class="favorite-quote">${quote.text}</p>
            <p class="favorite-author">${quote.author}</p>
            <button class="delete-btn" data-index="${index}">Remove</button>
        `;

        favoritesList.appendChild(card);
    });

    // Add a click listener to each Remove button after all cards are on the page
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.dataset.index, 10);
            deleteFavorite(index);
        });
    });
}

// Remove the selected quote from the saved list and refresh the page display
function deleteFavorite(index){
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadFavorites();
}

// Load and show favorites as soon as the page opens
loadFavorites();
