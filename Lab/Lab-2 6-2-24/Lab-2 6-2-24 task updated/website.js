"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var teacher_1 = require("./teacher");
var student_1 = require("./student");
// all classes instance can be created
var teacher1 = new teacher_1.Teacher("Mashiur Rahman");
var course1 = teacher1.makeCourse("CS MATH", "CS4001", "CS Mathematics");
var student1 = new student_1.Student("Naimul", 1);
student1.register(course1);
