declare namespace Math {
    let mode: "radians" | "degrees";
    
    function degreesToRadians(degrees: number): number;
    function radiansToDegrees(radians: number): number;
    function switchMode(mode?: "radians" | "degrees"): "radians" | "degrees";
    
    function sin(value: number): number;
    function cos(value: number): number;
    function tan(value: number): number;
    function asin(value: number): number;
    function acos(value: number): number;
    function atan(value: number): number;
    function atan2(y: number, x: number): number;
    
    function sinh(value: number): number;
    function cosh(value: number): number;
    function tanh(value: number): number;
    function asinh(value: number): number;
    function acosh(value: number): number;
    function atanh(value: number): number;
}

export = Math;