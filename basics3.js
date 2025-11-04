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