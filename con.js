const HalfPi = Math.PI / 2;

// Example angle sa
let sa = 2.7; // in radians

// Aligning sa to the nearest multiple of HalfPi
let s = sa - sa % HalfPi + HalfPi;

console.log(s); // This would print the aligned value
