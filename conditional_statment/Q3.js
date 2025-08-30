let dataUsed = parseFloat(prompt("Enter total data used this month: "));

if (dataUsed < 5) {
    console.log("Low usage.");
} else if (dataUsed >= 5 && dataUsed <= 15) {
    console.log("Normal usage.");
} else {
    console.log("Heavy usage, consider a bigger plan.");
}