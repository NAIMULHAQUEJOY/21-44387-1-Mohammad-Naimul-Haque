import {course} from './courses';
//course can be created by a teacher


export class Teacher {
    private tName: string;
    constructor (tName: string){
        this.tName=tName;
    }

    makeCourse(cName: string, courseId: string, tittle: string): course {
        return new course (cName, courseId, tittle);
    }
}
