// Array of inspirational messages
const messages = [
    "Believe in yourself and all that you are.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "You are stronger than you think.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "Start where you are. Use what you have. Do what you can.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The best way to predict your future is to create it.",
];

// Function to display a random message
function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById("message");
    messageElement.textContent = messages[randomIndex];
}
