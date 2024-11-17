//Challenge 4 Very Hard

class person {
constructor(name, job, age){
this.name = name
this.job = job
this.age = age
}

    fetchJob(){
        return `${this.name} is a ${this.job}`
    }

    exercise(){
        return "Running is fun! - said no one ever."
    }


}

class programmer extends person {
constructor (name, job, age, lang){
    super(name, job, age)
    this.lang = lang;
    this.busy = true;
    }

    completeTask(){
        this.busy = false
    }
}

acceptNewTask(); {
    this.busy = false;
}

offerNewTask()
if(this.busy){
    console.log(`${this.name}can't accept any new tasks right now`)
} else {
    console.log(`${this.name} would love to take on a new responsibility`)
}

learnLanguage(codeLanguage); {
    this.listLanguages()
}

listLanguages();{
    for (let i = 0; i < this.lang.length; i++) {
        return this.lang
    }
}


const person1 = new person ("nate", "r2h", 19)
console.log(person1.exercise())

const c1 = new programmer("Tony", "FBI", 33, ["HTML", "Python", "CSS"] )
const c2 = new programmer("Susy","Engineer", 30,["HTML", "CSS", "JavaScript"] )
const c3 = new programmer("Selana", "Manager", 38, ["JavaScript", "C#", "Node"])

const person2 = new programmer("bk", "cop", 24, "javaScript")
console.log(person2.busy)

person2.completeTask()
console.log(person2.busy);

person2.acceptNewTask()
person2.busy = false
console.log(person2.acceptNewTask)

console.log(c1.listLanguages())[1];
console.log(c2.listLanguages())
console.log(c3.listLanguages())








