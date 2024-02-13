"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var courses_1 = require("./courses");
//course can be created by a teacher
var Teacher = /** @class */ (function () {
    function Teacher(tName) {
        this.tName = tName;
    }
    Teacher.prototype.makeCourse = function (cName, courseId, tittle) {
        return new courses_1.course(cName, courseId, tittle);
    };
    return Teacher;
}());
exports.Teacher = Teacher;
