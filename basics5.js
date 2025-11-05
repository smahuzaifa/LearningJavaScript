//Strings in JS

//Importing class
const Person = require('./basics7') //The class has now been imported from the basics7 file
//exports which is the  CommonJS property to export a module.

 let day = "tuesday "
 console.log(day.slice(0,4))
 console.log(day[2])
 let splitDay=day.split("s") //Splits at every s
 console.log(splitDay)
 console.log(splitDay[0])
 console.log(splitDay[1])
 
 //Convert Strings to a number
 let a='10', b='2';
 let diff = parseInt(a)-parseInt(b);
 console.log(diff);
 //To convert back to string
 diff.toString();
 //Concatenate 2 strings
 let newDay =day+day+day //+ is used to join 2 strings
 console.log(newDay)
 let val = newDay.indexOf("day")
 console.log(newDay.indexOf("day"))
 console.log(newDay.indexOf("day",5))
 let count=0;
 //To find the number of occurrence
 while(val!==-1){ //While only stops when the condition is false
    count++
    val = newDay.indexOf("day",val+1) //Repeat the same from the next index. If val is 4, then it 
    // starts from 5th index
 }
 console.log(count)

 //Related to class
 let person = new Person("Chris","Columbous");
 console.log(person.fullName())
 