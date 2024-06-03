class Student{
    constructor(name,age,roll){
        this.name=name;
        this.age=age;
        this.roll=roll;
    }
    talk(){
        console.log(`Hey ${this.name} this side`);
    }
}

let s1=new Student("pavan",55,56);
let s2=new Student("shubham",55,56);
