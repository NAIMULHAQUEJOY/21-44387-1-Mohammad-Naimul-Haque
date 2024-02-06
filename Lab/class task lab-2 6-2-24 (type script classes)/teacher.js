//Classes
var Teacher = /** @class */ (function () {
    function Teacher(courseId, courseName) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    Teacher.prototype.display = function () {
        console.log("Course Id: ".concat(this.courseId, ", Course Name:").concat(this.courseName));
    };
    return Teacher;
}());
var tc1 = new Teacher(1, "Science");
tc1.display();
