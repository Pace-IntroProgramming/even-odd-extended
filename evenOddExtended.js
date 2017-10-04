// evenOddExtended takes an input n and determines if it is an even number
function evenOddExtended(n) {
    // First remind the user what number they entered
    console.log("You entered '" + n + "'.");

    // Next determine if the input is actually an integer
    if (parseInt(n) == n) {
        // If the input is an integer, determine if it is positive
        if (n > 0) {
            // If the input is a positive integer, determine if it is even
            if (n % 2 == 0) {
                console.log('Your number is even!');
            } else {
                console.log('Your number is odd!');
            }
        } else {
            console.log('Your number is not a positive number.');
        }
    } else {
        console.log('Your input is not an integer.');
    }
}
