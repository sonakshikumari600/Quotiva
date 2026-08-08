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
        },
        {
            text: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        },
        {
            text: "Don't watch the clock; do what it does. Keep going.",
            author: "Sam Levenson"
        },
        {
            text: "You are never too old to set another goal or to dream a new dream.",
            author: "C.S. Lewis"
        },
        {
            text: "The secret of getting ahead is getting started.",
            author: "Mark Twain"
        },
        {
            text: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius"
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
        },
        {
            text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "Life is really simple, but we insist on making it complicated.",
            author: "Confucius"
        },
        {
            text: "In the end, it's not the years in your life that count. It's the life in your years.",
            author: "Abraham Lincoln"
        },
        {
            text: "Life is either a daring adventure or nothing at all.",
            author: "Helen Keller"
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
        },
        {
            text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
            author: "Lao Tzu"
        },
        {
            text: "The best thing to hold onto in life is each other.",
            author: "Audrey Hepburn"
        },
        {
            text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
            author: "Maya Angelou"
        },
        {
            text: "To love and be loved is to feel the sun from both sides.",
            author: "David Viscott"
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
        },
        {
            text: "The road to success and the road to failure are almost exactly the same.",
            author: "Colin R. Davis"
        },
        {
            text: "Success is walking from failure to failure with no loss of enthusiasm.",
            author: "Winston Churchill"
        },
        {
            text: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
        },
        {
            text: "Don't be afraid to give up the good to go for the great.",
            author: "John D. Rockefeller"
        },
        {
            text: "I find that the harder I work, the more luck I seem to have.",
            author: "Thomas Jefferson"
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
        },
        {
            text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
            author: "Dr. Seuss"
        },
        {
            text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            author: "Mahatma Gandhi"
        },
        {
            text: "Education is not the filling of a pail, but the lighting of a fire.",
            author: "William Butler Yeats"
        },
        {
            text: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King"
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
        },
        {
            text: "The only disability in life is a bad attitude.",
            author: "Scott Hamilton"
        },
        {
            text: "Weakness of attitude becomes weakness of character.",
            author: "Albert Einstein"
        },
        {
            text: "People may hear your words, but they feel your attitude.",
            author: "John C. Maxwell"
        },
        {
            text: "Adopting the right attitude can convert a negative stress into a positive one.",
            author: "Hans Selye"
        },
        {
            text: "Your living is determined not so much by what life brings to you as by the attitude you bring to life.",
            author: "John Homer Miller"
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
        },
        {
            text: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates"
        },
        {
            text: "Turn your wounds into wisdom.",
            author: "Oprah Winfrey"
        },
        {
            text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
            author: "Albert Einstein"
        },
        {
            text: "The wisdom of the wise and the experience of the ages are preserved by constant reading.",
            author: "Plutarch"
        },
        {
            text: "Wrinkles should merely indicate where smiles have been.",
            author: "Mark Twain"
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
        },
        {
            text: "The secret of happiness is not in doing what one likes, but in liking what one does.",
            author: "James M. Barrie"
        },
        {
            text: "For every minute you are angry you lose sixty seconds of happiness.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "If you want to be happy, be.",
            author: "Leo Tolstoy"
        },
        {
            text: "Most people are about as happy as they make up their minds to be.",
            author: "Abraham Lincoln"
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
