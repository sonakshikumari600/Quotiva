// This file handles everything on the home page.
// It stores all quotes, shows a random quote when the page loads,
// lets the user filter by category, copy, share, and save favorites.

// All quotes are stored here, grouped by category
const quotes = {

    motivation: [
        {
            text: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt"
        },
        {
            text: "Success is not final, failure is not fatal.",
            author: "Winston Churchill"
        },
        {
            text: "Dream big and dare to fail.",
            author: "Norman Vaughan"
        }
    ],

    life: [
        {
            text: "Life is what happens while you are busy making other plans.",
            author: "John Lennon"
        },
        {
            text: "Enjoy the little things in life.",
            author: "Robert Brault"
        },
        {
            text: "Live life to the fullest.",
            author: "Unknown"
        }
    ],

    love: [
        {
            text: "Where there is love there is life.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Love all, trust a few.",
            author: "William Shakespeare"
        },
        {
            text: "Love is composed of a single soul inhabiting two bodies.",
            author: "Aristotle"
        }
    ],

    success: [
        {
            text: "Opportunities don't happen. You create them.",
            author: "Chris Grosser"
        },
        {
            text: "Success usually comes to those who are too busy to be looking for it.",
            author: "Henry David Thoreau"
        }
    ],

    study: [
        {
            text: "Study while others are sleeping.",
            author: "William A. Ward"
        },
        {
            text: "Education is the passport to the future.",
            author: "Malcolm X"
        }
    ],

    attitude: [
        {
            text: "Your attitude determines your direction.",
            author: "Unknown"
        },
        {
            text: "A positive attitude changes everything.",
            author: "Unknown"
        }
    ],

    wisdom: [
        {
            text: "The wise man does not lay up his own treasures. The more he gives to others, the more he has.",
            author: "Lao Tzu"
        },
        {
            text: "Knowing yourself is the beginning of all wisdom.",
            author: "Aristotle"
        }
    ],

    happiness: [
        {
            text: "Happiness is not by chance, but by choice.",
            author: "Jim Rohn"
        },
        {
            text: "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
            author: "William Saroyan"
        },
        {
            text: "Happiness is when what you think, what you say, and what you do are in harmony.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Be happy for this moment. This moment is your life.",
            author: "Omar Khayyam"
        }
    ]

};

// Keeps track of which category is currently selected
let currentCategory = "wisdom";

// Get the HTML elements we need to update on the page
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const categoryTag = document.querySelector(".category-tag");
const categoryButtons = document.querySelectorAll(".category");
const favoriteBtn = document.getElementById("favoriteBtn");

// Pick a random quote from the chosen category and show it on the card
function showQuote(category){

    const selectedQuotes = quotes[category];

    const random =
        Math.floor(Math.random() * selectedQuotes.length);

    const quote = selectedQuotes[random];

    quoteText.textContent = quote.text;
    quoteAuthor.textContent = "— " + quote.author;

    // Update the small category label on the card
    categoryTag.textContent =
        category.charAt(0).toUpperCase() +
        category.slice(1);

    updateFavoriteIcon();
}

// Show a quote right away when the page first opens
showQuote(currentCategory);

// When the user clicks a category button, highlight it and show a quote from that category.
// If "All" is clicked, pick a random category from the full list.
categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category =
            button.dataset.category;

        if(category === "all"){

            const allCategories =
                Object.keys(quotes);

            const randomCategory =
                allCategories[
                    Math.floor(
                        Math.random() *
                        allCategories.length
                    )
                ];

            currentCategory =
                randomCategory;

            showQuote(randomCategory);

        }else{

            currentCategory =
                category;

            showQuote(category);
        }
    });
});

// When the user clicks "New Quote", show another random quote from the same category
document
.getElementById("newQuoteBtn")
.addEventListener("click", () => {

    showQuote(currentCategory);

});

// When the user clicks the copy button, copy the quote and author text to the clipboard
document
.getElementById("copyBtn")
.addEventListener("click", () => {

    const text =
        quoteText.textContent +
        " " +
        quoteAuthor.textContent;

    navigator.clipboard.writeText(text);

    alert("Quote copied! 📋");

});

// When the user clicks the share button, open the device share menu if supported
document
.getElementById("shareBtn")
.addEventListener("click", () => {

    const text =
        quoteText.textContent +
        " " +
        quoteAuthor.textContent;

    if(navigator.share){

        navigator.share({
            title: "Quotiva",
            text: text
        });

    }else{

        alert("Sharing not supported.");
    }

});

// Read the saved favorites list from the browser storage
function getFavorites(){
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Save the updated favorites list back to the browser storage
function saveFavorites(favorites){
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Check if the current quote is already saved as a favorite
function isFavorited(text){
    const favorites = getFavorites();
    return favorites.some(f => f.text === text);
}

// Show a filled heart if the quote is saved, or an empty heart if it is not
function updateFavoriteIcon(){
    if(isFavorited(quoteText.textContent)){
        favoriteBtn.textContent = "❤️";
        favoriteBtn.style.color = "#ef4444";
    } else {
        favoriteBtn.textContent = "🤍";
        favoriteBtn.style.color = "inherit";
    }
}

// When the user clicks the heart button, add or remove the quote from favorites
favoriteBtn.addEventListener("click", () => {

    let favorites = getFavorites();
    const existingIndex = favorites.findIndex(f => f.text === quoteText.textContent);

    if(existingIndex > -1){
        favorites.splice(existingIndex, 1);
        saveFavorites(favorites);
        alert("Removed from Favorites 💔");
    } else {
        const favoriteQuote = {
            text: quoteText.textContent,
            author: quoteAuthor.textContent
        };
        favorites.push(favoriteQuote);
        saveFavorites(favorites);
        alert("Added to Favorites ❤️");
    }

    updateFavoriteIcon();
});
