import {Teacher} from'./teacher';
export class course {
    private cName: string;
    private courseId: string;
    private tittle: string;
    private assignTeacher:Teacher;

    constructor (name: string, code:string, tittle: string){
               this.cName=name;
               this.courseId=code;
               this.tittle=tittle;
               this.assignTeacher=[];
    }

    getCoursesInfo(teacher: Teacher): string{
        this.assignTeacher.push(Teacher);

        return `( Course Name:${this.cName} Course ID: ${this.courseId} Course Tittle: ${this.tittle})`;
    }

}