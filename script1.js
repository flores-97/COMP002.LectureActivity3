let myGrade;
myGrade = "7"

if(myGrade >=90)
{
    console.log("A")
}
else if(myGrade <90 && myGrade >=80)
{
    console.log("B")
}
else if(myGrade <80 && myGrade >=70)
{
    console.log("C")
}
else if(myGrade <70 && myGrade >=60)
{
    console.log("D")
}
else(myGrade <=59) //this area is what should be in the else statement because it closes the loop
{
    console.log("F")
}
