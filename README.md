# BetterMathJs
An improved version of the JavaScript Math library with additional features and functionalities.

## Features
* Functions to convert between degrees and radians.
* Ability to set the mode to either degrees or radians for trigonometric functions.
* Enhanced trigonometric functions (`sin`, `cos`, `tan`, `asin`, `acos`, `atan`, ...) that respect the current mode.
* Default mode is set to radians, but can be changed to degrees.

## Limitations
* JavaScript's inherent floating-point precision issues may affect the accuracy of trigonometric calculations.

* Like Math.sin(30) in degrees may not return exactly 0.5 due to precision limitations and may return a value like 0.49999999999999994.

* You can use methods like `toFixed()` or `Math.round()` to round the results to a desired precision.

## Installation
```bash
npm install better-math-js
```

## Examples
```javascript
const Math = require("better-math-js");

// Switch to degrees
Math.switchMode("degrees");

console.log(Math.sin(30)); // 0.5
console.log(Math.cos(60)); // 0.5
console.log(Math.tan(45)); // 1

// Switch back to radians
Math.switchMode("radians");

console.log(Math.sin(Math.degreesToRadians(30))); // 0.5
console.log(Math.cos(Math.degreesToRadians(60))); // 0.5
console.log(Math.tan(Math.degreesToRadians(45))); // 1
```

## Current state of this project
finished    