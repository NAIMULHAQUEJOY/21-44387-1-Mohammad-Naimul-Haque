import { course } from './courses';
import { Teacher } from './teacher';

export class Student {
    private sName: string;
    private sId: number;
    private takenCourses: course[];

    constructor(sName: string, sId: number) {
        this.sName = sName;
        this.sId = sId;
        this.takenCourses = []; // array of courses
    }

    register(course: course): void {
        this.takenCourses.push(course);
        console.log(`${this.sName} registered in ${course.getCoursesInfo()}`);
    }
}
