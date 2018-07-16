// Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.

let randomInt = require("random-int");
let coin = randomInt(0, 1);
let heads = 0;
let tails = 0;
let totalFlips = 0;

for (let i = 0; i < 100; i++) {
  if (coin == 0) {
    heads += 1;
  } else {
    tails += 1;
  }
  coin = randomInt(0, 1);
  totalFlips += 1;
}
console.log("Total Flips: " + totalFlips);
console.log("Heads: " + heads);
console.log("Tails: " + tails);