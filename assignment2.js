let limit = parseInt(prompt("Enter the Limit of the Double Loop:"));

console.log("Result:");

let i = 0;

while (i <= limit) {
  let j = 0;

  while (j <= limit) {
    let sum = i + j;
    console.log("[" + i + "] [" + j + "] Added value is " + sum);

    j++; 
  }

  i++; 
}
