// Julia Yu

var y = 2020;
var a = y % 19;
var b = y / 100;
var c = y % 100;
var d = b / 4;
var e = b % 4;
var f = (b + 8) / 25;
var g = (b - f + 1) / 3;
var h = (19 * a + b - d - g + 15) % 30;
var i = c / 4;
var k = c % 4;
var r = (32 + 2 * e + 2 * i - h - k) % 7;
var m = (a + 11 * h + 22 * r) / 451;
var n = (h + r - 7 * m + 114) / 31;
var p = (h + r - 7 * m + 114) % 31;

console.log("Month: " + Math.round(n));
console.log("Day: " + Math.round(p + 1));

// Divide y by 19 and call the remainder a. Ignore the quotient.
// Divide y by 100 and get a quotient b and remainder c.
// Divide b by 4 and get quotient d and remainder e.
// Divide b + 8 by 25 and get quotient f. Ignore the remainder.
// Divide b - f + 1 by 3 and get quotient g. Ignore the remainder.
// Divide 19 * a + b - d - g + 15 by 30 and get remainder h. Ignore the quotient.
// Divide c by 4 and get quotient i and remainder k.
// Divide 32 + 2 * e + 2 * i - h - k by 7 and get remainder r. Ignore the quotient.
// Divide a + 11 * h + 22 * r by 451 and get quotient m. Ignore the remainder.
// Divide h + r - 7 * m + 114 by 31 and get quotient n and remainder p.
