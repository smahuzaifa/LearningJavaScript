const flag = true;

//Conditions
if(!flag)
{
    console.log("Condition is satisfied")
}
// else if
else
{
    console.log("Condition is not satisfied")
}

//while
let i=0;
while(i < 10)
{
    i++
    console.log("Inside the while loop")
    console.log(i)
}

//Do-while

let x=0;
do{
    x++
} while (x>10);
console.log(x)

//For loop
console.log("For loop")
for(var k=0;k<=10;k++)
{
    console.log(k)
}

//From 1-10, give me common multiples of 2 and 5
console.log("Multiple Execution")
let n=0;
for(var k=1;k<=100;k++)
{
    if(k%2 == 0 && k%5 == 0)
    {
        n++
        console.log(k)
        if(n==3)
            break
    }
        
}