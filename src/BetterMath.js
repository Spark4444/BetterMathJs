const originalSin = Math.sin;
const originalCos = Math.cos;
const originalTan = Math.tan;
const originalAsin = Math.asin;
const originalAcos = Math.acos;
const originalAtan = Math.atan;
const originalAtan2 = Math.atan2;
const originalSinh = Math.sinh;
const originalCosh = Math.cosh;
const originalTanh = Math.tanh;
const originalAsinh = Math.asinh;
const originalAcosh = Math.acosh;
const originalAtanh = Math.atanh;

// Function to convert degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Function to convert radians to degrees
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

Math.degreesToRadians = degreesToRadians;
Math.radiansToDegrees = radiansToDegrees;

// Setting default mode to radians
Math.mode = "radians";

// Function to switch between degrees and radians
Math.switchMode = function(mode) {
    mode ? this.mode = mode : this.mode = (this.mode === "radians") ? "degrees" : "radians";
    return this.mode;
};

// New implementations of trigonometric functions
Math.sin = function(value) {
    if (this.mode === "degrees") {
        value = degreesToRadians(value);
    }
    return originalSin(value);
};

Math.cos = function(value) {
    if (this.mode === "degrees") {
        value = degreesToRadians(value);
    }
    return originalCos(value);
};

Math.tan = function(value) {
    if (this.mode === "degrees") {
        value = degreesToRadians(value);
    }
    return originalTan(value);
};

Math.asin = function(value) {
    const result = originalAsin(value);
    return this.mode === "degrees" ? radiansToDegrees(result) : result;
};

Math.acos = function(value) {
    const result = originalAcos(value);
    return this.mode === "degrees" ? radiansToDegrees(result) : result;
};

Math.atan = function(value) {
    const result = originalAtan(value);
    return this.mode === "degrees" ? radiansToDegrees(result) : result;
};

Math.atan2 = function(y, x) {
    const result = originalAtan2(y, x);
    return this.mode === "degrees" ? radiansToDegrees(result) : result;
};

// Hyperbolic functions
Math.sinh = function(value) {
    if (this.mode === "degrees") {
        value = degreesToRadians(value);
    }
    return originalSinh(value);
};

Math.cosh = function(value) {
    if (this.mode === "degrees") {
        value = degreesToRadians(value);
    }
    return originalCosh(value);
};

Math.tanh = function(value) {
    if (this.mode === "degrees") {
        value = degreesToRadians(value);
    }
    return originalTanh(value);
};

// Inverse hyperbolic functions
Math.asinh = function(value) {
    const result = originalAsinh(value);
    return this.mode === "degrees" ? radiansToDegrees(result) : result;
};

Math.acosh = function(value) {
    const result = originalAcosh(value);
    return this.mode === "degrees" ? radiansToDegrees(result) : result;
};

Math.atanh = function(value) {
    const result = originalAtanh(value);
    return this.mode === "degrees" ? radiansToDegrees(result) : result;
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = Math;
}