// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
       this.name = attributes.name,
       this.age = attributes.age,
       this.location = attributes.location
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(instructAttributes){
        super(instructAttributes);
        this.speciality = instructAttributes.speciality;
        this.favLanguage = instructAttributes.favLanguage;
        this.catchPhrase = instructAttributes.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground,
        this.className = studentAttr.className,
        this.favSubjects = studentAttr.favSubjects
        }

    listsSubject(){

       this.favSubjects.forEach(function(sub) {
           return console.log(sub);
        });
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    }
    
class ProjectManager extends Instructor{
    constructor(prAttr){
        super(prAttr);
        this.gradClassName = prAttr.gradClassName,
        this.favInstructor = prAttr.favInstructor
    }
    standUp(channel){
       return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const instructorOne = new Instructor({
    name: 'brandon',
    location: 'Chicago',
    age: 59,
    favLanguage: 'JavaScript',
    speciality: 'Front-end',
    catchPhrase: 'hold on hold on'
})

const studentTwo = new Student({
    name: 'Jordan',
    location: 'Denver',
    age: 69,
    favLanguage: 'C++',
    speciality: 'back-end',
    catchPhrase: 'horrible',
    previousBackground: 'dont know',
    className: 'Horizon',
    favSubjects: ['Biology', 'Math', 'Cal'],
})

const prThree = new ProjectManager({
    name: 'Rocky',
    location: 'Denver',
    age: 69,
    favLanguage: 'C++',
    speciality: 'back-end',
    catchPhrase: 'horrible',
    previousBackground: 'dont know',
    className: 'Horizon',
    favSubjects: 'Biology',
    gradClassName: 'star',
    favInstructor: 'Jordan'
})

console.log(instructorOne.demo('JAVA'));
console.log(instructorOne.grade(studentTwo, 'C++'));
// console.log(studentTwo.listsSubject());
// studentTwo.listsSubject();
console.log(studentTwo.PRAssignment('C#'));
console.log(studentTwo.sprintChallenge('English'));
console.log(prThree.standUp('web'));
console.log(prThree.debugsCode(studentTwo, 'Bio'))


