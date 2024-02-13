"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// all classes instance can be created
var teacher_1 = require("./teacher");
var student_1 = require("./student");
var teacher1 = new teacher_1.Teacher("Mashiur Rahman");
var course1 = teacher1.makeCourse("Science", "CS Math", "IP");
var student1 = new student_1.Student("Naimul", 1);
student1.register(course1);
