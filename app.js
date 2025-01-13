// Register Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
        .then(() => console.log("Service Worker Registered"))
        .catch(error => console.error("Service Worker Registration Failed:", error));
}

// Retirement Calculator Logic
document.getElementById("retirement-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const capital = parseFloat(document.getElementById("capital").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100;
    const monthlySpent = parseFloat(document.getElementById("monthly-spent").value);
    const monthlyIncome = parseFloat(document.getElementById("monthly-income").value);
    const targetGoal = parseFloat(document.getElementById("target-goal").value);

    let currentCapital = capital;
    let years = 0;

    // Calculate the number of years required to reach the target goal
    while (currentCapital < targetGoal) {
        currentCapital += monthlyIncome * 12;  // Add yearly income
        currentCapital *= (1 + interestRate); // Apply interest rate at the end of each year
        currentCapital -= monthlySpent * 12;  // Subtract yearly spending
        years++;
    }

    // Display the result
    document.getElementById("years-to-retire").textContent = years;
});
