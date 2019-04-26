// CODE here for your Lambda Classes

/* 
 * Person
 *
 * name: string
 * age: number
 * location: string
 *
 * speak: () => void
 * */

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

/**
 * Instructor < Person
 *
 * specialty: string
 * favLanguage: string
 * catchPhrase: string
 *
 * demo: string => string
 * grade: student, string => string 
*/

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

/*
 * Student < Person
 *
 * previousBackground: string
 * className: string
 * favSubjects: string[]
 *
 * listSubjects: () => void
 * lists all of the students favorite subjects, one by one.
 *
 * PRAssignment: string => void
 * Receives the subject as a string and logs out 
 * `student.name has submitted a PR for {subject}`
 *
 * sprintChallenge: string => void
 * Receives subject as a string and logs out
 * `student.name has begun sprint challenge on {subject}`
 *
 * */

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }

  listSubjects() {
    this.favSubjects.forEach(console.log);
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}


/**
 * ProjectManager < Instructor
 *
 * gradClassName: string
 * favInstructor: string
 *
 * standUp(channel: string) => void
 * logs:
 * `{name} announces to {channel}, @channel standy times!`
 *
 * debugsCode(student: Student, subject: string) => void
 * logs:
 * `{name} debugs {student.name}'s code on {subject}`
 *
 */

class ProjectManager extends Instructor {
  constructor(attrs) {
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times`);
  }

  debug(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

let leslie = new Person({
  name: "Leslie",
  age: 24,
  location: "Hopkins, MN",
});

let carly = new Person({
  name: "Carly",
  age: 19,
  location: "Fargo, ND",
});

let mitch = new Person({
  name: "Mitch",
  age: 31,
  location: "Saint Francis, MN"
});
