//student class
var Student = /** @class */ (function () {
    function Student(stId, stName) {
        this.stId = stId;
        this.stName = stName;
    }
    Student.prototype.display = function () {
        console.log("St_Id: ".concat(this.stId, ", StNAme: ").concat(this.stName));
    };
    return Student;
}());
var st1 = new Student(11, "Joy");
st1.display();
