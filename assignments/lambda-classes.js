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
    this.favSubjects.forEach(subject => console.log(subject));
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
    super(attrs);
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

// PERSONs
const leslie = new Person({
  name: "Leslie",
  age: 24,
  location: "Hopkins, MN",
});

const carly = new Person({
  name: "Carly",
  age: 19,
  location: "Fargo, ND",
});

const mitch = new Person({
  name: "Mitch",
  age: 31,
  location: "Saint Francis, MN"
});

console.log(leslie.name);
console.log(carly.age);
console.log(mitch.location);
leslie.speak();

// STUDENTs
const matt = new Student({
  name: "Matt",
  age: 26,
  location: "Hopkins, MN",
  previousBackground: "Marketing",
  className: "WebPT6",
  favSubjects: [ "JavaScript", "Functional Programming" ],
})
const todd = new Student({
  name: "Todd",
  age: 32,
  location: "Atlanta, GA",
  previousBackground: "Mechanic",
  className: "iOS4",
  favSubjects: [ "Swift" ],
})
const billy = new Student({
  name: "Billy",
  age: 22,
  location: "Seattle, WA",
  previousBackground: "Fry Cook",
  className: "UX2",
  favSubjects: [ "User Interface Design", "A11y", ],
});

console.log(matt.previousBackground);
console.log(todd.className);
matt.listSubjects();
matt.PRAssignment("Classes in JavaScript");
matt.sprintChallenge("JavaScript Fundamentals");

// INSTRUCTORs
const keiran = new Instructor({
  name: "Keiran",
  age: 24,
  location: "Miami, FL",
  specialty: "Memes",
  favLanguage: "JavaScript",
  catchPhrase: "Hotdog Menu",
});

const dan = new Instructor({
  name: "Dan",
  age: 30,
  location: "Jackson Hole, WY",
  specialty: "Chill tunes",
  favLanguage: "JavaScript",
  catchPhrase: "Corgi's are cool",
});

const dustin = new Instructor({
  name: "Dan",
  age: 28,
  location: "Portland, OR",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Don't forget the homies"
});

console.log(keiran.specialty);
console.log(dan.favLanguage);
console.log(dustin.catchPhrase);
keiran.demo("Pseudo-Classical Inheritance");
dustin.grade(matt, "react");

const richard = new ProjectManager({
  name: "Richard",
  age: 60,
  location: "Dallas, TX",
  specialty: "UX",
  favLanguage: "CSS",
  catchPhrase: "Have a good night",
  gradClassName: "CS",
  favInstructor: "Dan",
});
const ari = new ProjectManager({
  name: "Ari",
  age: 25,
  location: "San Diego, CA",
  specialty: "Functional Programming",
  favLanguage: "JavaScript",
  catchPhrase: "It's Saturday",
  gradClassName: "WebFT10",
  favInstructor: "Dustin",
});

richard.standUp("webpt6_richard");
ari.debug(billy, "Pseudo-Classical Inheritence");


