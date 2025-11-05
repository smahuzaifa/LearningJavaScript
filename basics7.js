//Classes in JavaScript
module.exports = class Person{ //moduel.export will export the class to other files
    age=25;
    //to have multiple lines of code we can use getter method
    get location(){ //Property
        return "Canada";
    }
    constructor(firstName,lastName){
        //the above parameters are only available for the constructor
        //to increase the scope to the whole class we will be using "this"
        this.firstName=firstName;
        this.lastName=lastName;
    }
    fullName(){ //Methods in class
        console.log(this.firstName+this.lastName)
    }
}
// let person = new Person("ABCD","XYZ")
// let person1 = new Person("ABCD12","23XYZ"); //Constructor gets called automatically
// console.log(person.age);
// console.log(person.location);
// console.log(person.fullName())
// console.log(person1.fullName())
//Constructor is a method which executes by default when an object is created
