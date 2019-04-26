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
