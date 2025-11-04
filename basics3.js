var marks = Array(6)
console.log(marks)
var marks = new Array(20,30,45,12,37,100)
console.log(marks)
var marks = [1,2,3,4,5,6] //Clearly tells this is an array
console.log(marks) //Prints the whole array
console.log(marks[2]) //Prints the 3rd value in the array
marks[2] = 3.1 //Updating value of an element in the array
console.log(marks[2])
console.log(marks.length) //length of an array

//Increasing the array size
marks.push(7)
marks[2] = 3
console.log(marks)
console.log(marks.length)
marks.pop() //Deletes the last element
console.log(marks)
console.log(marks.length)
marks.unshift(0) //Add to the beginning of an array
console.log(marks)
console.log(marks.length)

//Get value based on index
console.log(marks.indexOf(5))
//To check whether an element is present in an array
console.log(marks.includes(2)) //true
console.log(marks.includes(20)) //false

//Breaking an array
console.log(marks)
submarks = marks.slice(2,5) //Only considers the elements betwwen the 2nd and 5th index
console.log (submarks)
console.log(marks)
//For loop
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i])
}
//To add all the values in an array
var sum =0
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i]
}
console.log("The sum is " +sum)

// Array Functions Reduce, Filter and Map
let total = marks.reduce((sum,mark)=>sum+mark,0)
/*
The reduce function above takes 2 arguments. The first one is accumulator which is sum in our 
example, this is where all the temporary iterating values are stored. The next argument,
which will use a variable mark, is where the result of the action that is performed will be
stored. The we use "=>" which points to what the action needs to be done, and then we perform
the addition of the 2 variables. The 0 in the last would be the intital value declared for 
our accumulator, which is similar to saying "let sum=0"
This method will always return a single value
*/
console.log(total);
var scores = [10,21,32,43,54];
//To print the elements of an array which are only even
var evenScores = []; //Declaring an empty array
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2 == 0)
    {
        evenScores.push(scores[i])
    }
    console.log("Within For Loop "+evenScores)
}
console.log(evenScores)
//Much more optimal way with the help of filter method
var evenScores = scores.filter(score=>score%2==0)
console.log(evenScores)
// To iterate and update(accumulate) values, use reduce; and if we have to filter an array based
// on a condition like even or odd then use filter

//Map function
//Create new array with even scores and multiple each by 3
var Array3 = evenScores.map(score=>score*3)
console.log(Array3)
