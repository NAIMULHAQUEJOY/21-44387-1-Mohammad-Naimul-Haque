export class course {
    private cName: string;
    private courseId: string;
    private tittle: string;

    constructor (name: string, code:string, tittle: string){
               this.cName=name;
               this.courseId=code;
               this.tittle=tittle;
    }

    getCoursesInfo(): string{
        return `( Course Name:${this.cName} Course ID: ${this.courseId} Course Tittle: ${this.tittle})`;
    }

}