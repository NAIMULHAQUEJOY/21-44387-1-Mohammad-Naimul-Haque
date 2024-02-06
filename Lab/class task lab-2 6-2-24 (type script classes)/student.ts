//student class

class Student {
    stId: number;
    stName: string;
    constructor(stId: number, stName: string){
        this.stId=stId;
        this.stName=stName;
    }
    display(): void{
        console.log (`St_Id: ${this.stId}, StNAme: ${this.stName}`);
    }
}

let st1= new Student (11,"Joy");
st1.display();