//Functions
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 20)); // 30
//Arroe functions
var addNumbers5 = function (a, b) { return a + b; };
console.log(addNumbers5(10, 20)); //30
//Optional Parameters
function addNumbers1(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0); // c?? 0 means c is undefined then use 0
}
console.log(addNumbers1(10, 30, 10));
//Default Parameters, means, here c:numnber=0 means c is optional and default value is zero
function addNumbers2(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
//rest parameters,here nums: number[] means nums is an array of numbers.
function addNumbers3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var num = nums_1[_a];
        sum += num;
    }
    return sum;
}
console.log(addNumbers3);
