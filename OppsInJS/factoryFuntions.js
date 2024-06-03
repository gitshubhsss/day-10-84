
function studentMake(name,age,roll) {
    let student={
        name:name,
        age:age,
        roll:roll,
        talk(){
            console.log(`hey am ${this.name}`);
        }
    }
    return student
}

let s1=studentMake("shubham",22,4044);
for(let i=0;i<4;i++){
   console.log(s1);
}

let s2=studentMake("pavan",22,4012);

console.log(s1.talk===s2.talk);//false
//since the memomey is created separately here we are not going to use this technique for creating the objects