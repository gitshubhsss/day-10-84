class Person {
  constructor(name, age) {
    console.log(`parent  class constructor`);
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hey am ${this.name}`);
  }
}


class Student extends Person {
  constructor(name, age, roll) {
    super(name, age); //parent class constructor is beign called
    console.log(`student class constructor`);
    this.roll = roll;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); //parent class constructor is being called
    console.log(`teacher class constructor`);
    this.roll = subject;
  }
}

// let s1 = new Student("shubham", 22, 4041);
// let t1 = new Student("shetalmam", 40, "DAA");
