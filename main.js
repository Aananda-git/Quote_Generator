
const quotes = {
    science: [
        "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson",
        "Science is not only a disciple of reason but, also, one of romance and passion. - Stephen Hawking",
        "The important thing in science is not so much to obtain new facts as to discover new ways of thinking about them. - William Lawrence Bragg",
        "Somewhere, something incredible is waiting to be known. - Carl Sagan",
        "We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically. - Neil deGrasse Tyson",
        "Science is organized knowledge. Wisdom is organized life. - Immanuel Kant",
        "The science of today is the technology of tomorrow. - Edward Teller",
        "Science without religion is lame, religion without science is blind. - Albert Einstein",
        "The most beautiful thing we can experience is the mysterious. - Albert Einstein",
        "Equipped with his five senses, man explores the universe around him and calls the adventure Science. - Edwin Hubble"
    ],
    inspirational: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "The only person you should try to be better than is the person you were yesterday. - Anonymous",
        "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "Your limitation—it’s only your imagination. - Unknown"
    ]
};

let currentCategory ="science";
let currentQuoteIndex = 0;
let fontSize = 25;

const quoteDisplay = document.querySelector(".quote");
const categorySelect = document.getElementById("category");
const randomBtn = document.getElementById("randomBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const darkModeSwitch = document.getElementById("dark-mode");
const increaseFontBtn = document.getElementById("increase-font");
const decreaseFontBtn = document.getElementById("decrease-font");

function displayQuote(category, index) {
    const categoryQuotes = quotes[category];
    const quote = categoryQuotes[index % categoryQuotes.length];
    quoteDisplay.textContent = quote;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeFontSize(change) {
    fontSize += change;
    quoteDisplay.style.fontSize = `${fontSize}px`;
}

categorySelect.addEventListener("change", function () {
    currentCategory = categorySelect.value;
    currentQuoteIndex = 0;
    displayQuote(currentCategory, currentQuoteIndex);
});

randomBtn.addEventListener("click", function () {
    const categoryQuotes = quotes[currentCategory];
    const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
    displayQuote(currentCategory, randomIndex);
});

prevBtn.addEventListener("click", function () {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote(currentCategory, currentQuoteIndex);
});

nextBtn.addEventListener("click", function () {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    displayQuote(currentCategory, currentQuoteIndex);
});

darkModeSwitch.addEventListener("change", toggleDarkMode);

increaseFontBtn.addEventListener("click", function () {
    changeFontSize(2);
});

decreaseFontBtn.addEventListener("click", function () {
    changeFontSize(-2);
});

displayQuote(currentCategory, currentQuoteIndex);