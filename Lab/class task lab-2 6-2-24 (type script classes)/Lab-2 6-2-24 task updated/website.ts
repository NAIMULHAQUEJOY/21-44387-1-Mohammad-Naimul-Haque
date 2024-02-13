
import {course} from'./courses';
import {Teacher} from'./teacher';
import {Student} from'./student';
// all classes instance can be created


const teacher1= new Teacher ("Mashiur Rahman");
const course1= teacher1.makeCourse("Science","CS Math","IP");
const student1= new Student ("Naimul",1);

student1.register(course1);