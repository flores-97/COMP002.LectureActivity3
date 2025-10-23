/*let myGrade;
myGrade = "90";

if(myGrade >=90)
{
    console.log("A");
}
else if(myGrade <90 && myGrade >=80)
{
    console.log("B");
}
else if(myGrade <80 && myGrade >=70)
{
    console.log("C");
}
else if(myGrade <70 && myGrade >=60)
{
    console.log("D");
}
else if(myGrade <=59) 
{
    console.log("F");
}
else(myGrade) //this area is what should be in the else statement because it is the default if previous conditions are met
*/

//switch
/*gradeVariable = 1;

switch (true) {
    case  gradeVariable >= 90: console.log("A")
            break; // do not forget the break; in between cases unless you want
    case gradeVariable < 90 && gradeVariable >=80: console.log("B")
            break;
    case gradeVariable < 80 && gradeVariable >=70: console.log("C")
            break;
    case gradeVariable < 70 && gradeVariable >=60: console.log("D")
            break;
    case gradeVariable <= 59: console.log("F") // this line will execute
            break;
    default: console.log("Invalid Grade.");
            break;
}
*/

/*I would prefer to use if/else-if/else statement because it is easier to control knowing it will line by line starting from the top
I believe that else-if/else statement are easier to read and write. Also it ensures that there is a condition before it defaults. */

//for loop
for (let i = 1; i <= 100; i++)//counts 1-100
{
    if (i % 2)//modulo looks for any remainders after dividing by 2
    {
        console.log("!");//outputs odd numbers as "!"
    } else
    console.log(i);//outputs even numbers
}