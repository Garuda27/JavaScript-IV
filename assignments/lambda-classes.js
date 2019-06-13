// CODE here for your Lambda Classes

class Person{
    constructor(attribute) {
    this.name = attribute.name;
    this.age = attribute.age;
    this.location = attribute.location;
}
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}!`;
}
}

class Instructor extends Person{
    constructor(attribute){
        super(attribute);
        this.specialty = attribute.specialty;
        this.favLanguage = attribute.favLanguage;
        this.catchPhrase = attribute.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(attribute){
        super(attribute);
        this.previousBackground = attribute.previousBackground;
        this.className = attribute.className;
        this.favSubjects = attribute.favSubjects;
    }
    listsSubjects() {
        console.log(favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor{
    constructor(attribute){
        super(attribute);
        this.gradClassName = attribute.gradClassName;
        this.favInstructor = attribute.favInstructor;
    }
    standUp(channel) {
        console.log(`${name} announces to ${channel}, @channel standy times!`);
    }
    grade(subject) {
        console.log(`${name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const kevin = new Instructor({
    name: 'Kevin',
    location: 'California',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Anyone else smell popcorn?'
  });

  const nicole = new Instructor({
    name: 'Nicole',
    location: 'Colorado',
    age: 28,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `I'd totally have a crush on me!`
  });

  const marha = new Student({
    name: 'Marha',
    location: 'Alaska',
    age: 42,
    previousBackground: 'Sniffing cats',
    className: 'Web21',
    favSubjects: ["CSS", "Html"]
  });

  const frank = new Student({
    name: 'Francisco',
    location: 'Puerto Rico',
    age: 13,
    previousBackground: `Eating spaghetti o's`,
    className: 'Web19',
     favSubjects: ["Python", "JavaScript"]
  });
