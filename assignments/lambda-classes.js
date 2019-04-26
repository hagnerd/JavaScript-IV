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
