let income = parseFloat(prompt("Enter your monthly income: "));

if (income < 10000) {
    console.log("Spend cautiously and save more!");
} else if (income >= 10000 && income <= 30000) {
    console.log("Balanced budget!");
} else {
    console.log("Your income is great! Consider investing in SIPs.");
}