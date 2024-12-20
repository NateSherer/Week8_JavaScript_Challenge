// Challenge 3 Hard
//Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. The SSN property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.

function personID () {
    let PII = {
        name: "Nathaniel",
        ssn: 101010101
    }
    return{
        getSsn(){
            return PII.ssn
        },
        getName(){
            return PII.name
        }
    }
}

let patient2 = personID()

console.log(patient2.getSsn)
console.log(patient2.getName)
console.log(patient2.ssn)
