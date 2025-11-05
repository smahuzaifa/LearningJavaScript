//Objects in Java
let person = {
    firstName:"Tim",
    lastName:"David",
    age:24,
    //Objects can also have functions in them. Again it has to be in akey value pair where the whole function
    //would be a value
    fullName: function(){
        console.log(this.firstName+" "+this.lastName)
    }
}
console.log(person.lastName) //by using . notation
console.log(person['lastName']) //Accessing through array notation
//to change the property at run time
person.firstName = "Abraham"
console.log(person.firstName)
//to add new property at run time
person.gender = 'Male'
console.log(person.gender)
console.log(person) // To print whole object
delete person.gender // to delete a property of an object
console.log(person.gender)

//To check if a property exists in an object
console.log('gender' in person) //By using the "in" keyword

//To print only the values in an object
for(let key in person)
{
    console.log(person[key])
}
console.log(person.fullName()) //When calling a property which is a function we have to mention (),
//for all others we can directly call it using the object handle
    