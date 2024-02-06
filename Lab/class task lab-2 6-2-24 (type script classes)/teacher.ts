//Classes

class Teacher {
    courseId: number;
    courseName: string;
    constructor(courseId: number, courseName:string){
        this.courseId=courseId;
        this.courseName=courseName;
    }
    display(): void{
        console.log(`Course Id: ${this.courseId}, Course Name:${this.courseName}`);
    }
}
let tc1 = new Teacher(1,"Science");
tc1.display();