"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = void 0;
var course = /** @class */ (function () {
    function course(name, code, tittle) {
        this.cName = name;
        this.courseId = code;
        this.tittle = tittle;
    }
    course.prototype.getCoursesInfo = function () {
        return "( Course Name:".concat(this.cName, " Course ID: ").concat(this.courseId, " Course Tittle: ").concat(this.tittle, ")");
    };
    return course;
}());
exports.course = course;
