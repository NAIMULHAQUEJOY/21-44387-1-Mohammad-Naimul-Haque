//Built In Type Any, enum ,type
//ANY= this variable can hole anytype of values
var data;
data = 'Something';
console.log(data); //something
//Enum Type, this is a way to define  a constant value
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Red;
console.log(color); //0
//Tupple type
var employee;
employee = [1, "Steve"];
console.log(employee); //[1, steve]
