function hue(color, adjustment) {
    // Assuming color is an object with h, s, l properties (HSL color model)
    let newHue = (color.h + adjustment) % 360; 
    if (newHue < 0) {
        newHue += 360;
    }

    return {
        ...color,
        h: newHue
    };
}

const color = { h: 120, s: 100, l: 50 };
const adjustedColor = hue(color, 240); // Adjust hue by 240 degrees

console.log(adjustedColor); // Output: { h: 0, s: 100, l: 50 }
