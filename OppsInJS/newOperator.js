//constructors cosnturctors are the special funtion in javascript
//constructor doesn't return anything & it always starts with capital letter 
function Student(name,age,roll) {
    this.name=name;
    this.age=age;
    this.roll=roll;
}
Student.prototype.talk=function () {
    console.log(`hey this is ${this.name}`);
}

let stud1=new Student("shubham",22,4040);
let stud2=new Student("pavan",21,4044);