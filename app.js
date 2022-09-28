do {
    var entry = prompt("Enter a whole number");
    entry = parseInt(entry);
    if ( isNaN(entry)){
        alert("You must enter a whole number");
    }
}
while (isNaN(entry));
var final;
var temp;



/* adds 9 to the entered number */
temp = entry + 9;
console.log("temp", temp)
document.write(temp);
/* multiplies the sum by 2 */
temp = temp * 2;
console.log("temp", temp)
document.write(temp);
/* subtracts from the product by 4 */
temp = temp - 4;
console.log("temp", temp)
document.write(temp);
/* divides the difference by 2 */
temp = temp / 2;
console.log("temp", temp)
document.write(temp);
/* subtracs the entered number from the quotient */
final = (temp - entry);
document.write(final);

alert("Your final number is: " + final);