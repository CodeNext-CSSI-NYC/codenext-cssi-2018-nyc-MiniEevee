// You can use nested loops and 2-d arrays to draw patterns
// Here is an example:
// let numRowsCols = 15;
// for (let i = 0; i < numRowsCols; i++) {
//   let row = "";
//   for (let j = 0; j < numRowsCols; j++) {
//     if (i == j) {
//       row += "X";
//     } else {
//       row += "-";
//     }
//   }
//   console.log(row);
// }
// Run this, and make sure you understand exactly why it looks as it does



// 1. Try to make this one. Hint: you will need to compare i and j in order to
// decide when to add * onto the strings that represent each row.

// *
// **
// ***
// ****
// *****
// ******

// let rows = 6;
// for (let i = 0; i < rows; i++) {
//   let stars = "";
//   for (let j = 0; j < rows; j++) {
//     if (i == j) {
//       stars += "*";
//     } else if (j < i) {
//       stars += "*";
//     }
//   }
//   console.log(stars);
// }


// 2. Try to figure out how to draw a "border" pattern:

// XXXXXXXX
// X------X
// X------X
// X------X
// X------X
// X------X
// X------X
// XXXXXXXX


// let rows = 8;
// console.log("XXXXXXXX");
// for (let row = 0; row < rows; row++) {
//   let border = "";
//   for (let col = 0; col < rows; col++) {
//     if (row == col) {
//       border += "X------X";
//     }
//   }
//   console.log(border);
// }
// console.log("XXXXXXXX");

// Bonus -- All the ones that follow are surprisingly tricky.

// 3. Hint -- You will need to add spaces to the string up to a certain point,
// and then add stars.
// Hint2 -- You could consider adding the stars first and then
// adding the spaces to the beginning of the string.

//     *
//    **
//   ***
//  ****
// *****

//col = 5
// let rows = 5;
// for (let i = 0; i < rows; i++) {
//   let stairs = "";
//   for (let j = 0; j < rows; j++) {
//     if (j == 0 && i == 0) {
//       stairs += "    *";
//     } else if (j == 0 && i == 1) {
//       stairs += "   **";
//     } else if (j == 0 && i == 2) {
//       stairs += "  ***"
//     } else if (j == 0 && i == 3) {
//       stairs += " ****"
//     } else if (j == 0 && i == 4) {
//       stairs += "*****"
//     }
//   }
//   console.log(stairs);
// }

// 4. Here's one that builds on the same idea in the previous pattern:
// *   *
//  * *
//   *
//  * *
// *   *

// let rows = 5;
// for (let i = 0; i < rows; i++) {
//   let x = "";
//   for (let j = 0; j < rows; j++) {
//     if ((i == 0 && j == 0) || (i == 4 && j == 0)) {
//       x += "*   *";
//     } else if ((i == 1 && j == 0) || (i == 3 && j == 0)) {
//       x += " * * ";
//     } else if (i == 2 && j == 0) {
//       x += "  *  ";
//     }
//   }
//   console.log(x);
// }

// (For the ones that follow, feel free to use something other than "X" and "-").
// The characters that you draw don't matter, just the pattern they are in.

// HINT: The only way to figure these out is to write down the coordinates of
// the spots that have the X's in them, compare them to the spots that have "-"
// in them, and try to find a pattern you can express in code.



// 5. Try to figure out how to draw a "chessboard" pattern:

// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X

// let row = 8;
// for (let i = 0; i < 8; i++) {
//   let line = "";
//   for (let j = 0; j < 8; j++) {
//     if ((i == 0 || i == 2 || i == 4 || i == 6) && j == 0) {
//       line += "X-X-X-X-";
//     } else if ((i == 1 || i == 3 || i == 5 || i == 7) && j == 0) {
//       line += "-X-X-X-X";
//     }
//   }
//   console.log(line);
// }

// These last two are very hard.

// 6. Try to figure out how to draw a "grid" pattern:
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX
// X-X-X-X-X
// XXXXXXXXX

// let rows = 9;
// for (let i = 0; i < rows; i++) {
//   let grid = "";
//   for (let j = 0; j < rows; j++) {
//     if ((i == 0 || i == 2 || i == 4 || i == 6 || i == 8) && j == 0) {
//       grid += "XXXXXXXXX";
//     } else if ((i == 1 || i == 3 || i == 5 || i == 7) && j == 0) {
//       grid += "X-X-X-X-X";
//     }
//   }
//   console.log(grid);
// }

// 7. A pyramid!
// Hint for this one... try printing stars straight down the middle first.
// How do you know what value will be the "middle"? Once you figure out what the middle is,
// you can add stars to the left and right of it as you go down the rows.
//
//     *
//    ***
//   *****
//  *******
// *********
// i == rows (up -> down)
// j == columns (left -> right)

let height = 5;
for (let i = 0; i < height; i++) {
  let pyramid = "";
  for (let j = 0; j < height; j++) {
    if (j == 4) {
      pyramid += "  *  ";
    }
    if ((j == 3 || j == 5) && i == 1) {
      pyramid += " * * ";
    }
  }
  console.log(pyramid);
}