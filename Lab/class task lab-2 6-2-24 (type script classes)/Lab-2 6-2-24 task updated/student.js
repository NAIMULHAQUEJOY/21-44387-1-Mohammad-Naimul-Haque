"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(sName, sId) {
        this.sName = sName;
        this.sId = sId;
        this.takenCourses = [];
    }
    Student.prototype.register = function (course) {
        this.takenCourses.push(course);
        console.log("".concat(this.sName, " registered in ").concat(course.getCoursesInfo()));
    };
    return Student;
}());
exports.Student = Student;
