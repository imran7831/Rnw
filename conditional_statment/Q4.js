let oldPassword = "dhruv123";
let inputOld = prompt("Enter old password:");
let newPass = prompt("Enter new password:");
let confirmPass = prompt("Confirm new password:");

if (inputOld != oldPassword) {
    console.log("Old password is incorrect!");
} else if (newPass != confirmPass) {
    console.log("Passwords do not match!");
} else {
    console.log("Password changed successfully!");
}