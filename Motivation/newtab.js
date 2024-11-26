const quoteElement = document.getElementById("quote");
const refreshButton = document.getElementById("refresh");

// Array of motivational quotes
const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. -William James",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "Never bend your head. Always hold it high. Look the world straight in the eye. -Helen Keller",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. -Zig Ziglar",
    "It always seems impossible until it's done. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "Don’t let yesterday take up too much of today. -Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. -Unknown",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt"
];


// Function to display a random quote
function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Refresh quote when button is clicked
refreshButton.addEventListener("click", displayQuote);

// Load a quote when the page loads
displayQuote();
