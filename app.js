"use strict";
// Day 10 CODING CHALLENGE
// Question 1: No Users: Ensure your user list is not empty.
let usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Great users
}
// Question 2: Checking Usernames: Do the following to create a paragraph that simulates how websites ensure 
// that everyone has a unique usernames.
let current_users = ["saba", "admin", "ahmed", "babar", "raza"];
let new_users = ["fawad", "hussain", "user7", "admin", "User9"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
// Question 3: Ordinal Numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in the, 
// except 1, 2, and 3.
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for loop
for (let i = 0; i < myNumbers.length; i++) {
    // now we use conditions 
    if (myNumbers[i] == 1) {
        console.log(`${myNumbers[i]}st`);
    }
    else if (myNumbers[i] == 2) {
        console.log(`${myNumbers[i]}nd`);
    }
    else if (myNumbers[i] === 3) {
        console.log(`${myNumbers[i]}rd`);
    }
    else if (myNumbers[i] >= 4 && myNumbers[i] <= 9)
        console.log(`${myNumbers[i]}th`);
}
