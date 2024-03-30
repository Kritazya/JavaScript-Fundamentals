2 + 2 // operand operator operand

// Arithmetic operator +, -, *, /, %, ++, --, **
var a=2; var b=3;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a++)
console.log(++a)
console.log(++b)
console.log(b++)
console.log(a**b)

//Comparision operator  ==, ===, <, >, <=, >=
var x=2; var y =4; var z='2'
console.log(x==z)
console.log(x===z)
console.log(y>x)
console.log(y<x)
console.log(y>=z)
console.log(y<=z)

//Assignment operator =,+=,-=
var x=2; var y =4; var z='2'
console.log(x+=z)
console.log(x+=y)
console.log(x-=y)

// Logical Operator
var aa= true; var bb = false
console.log(aa && bb)
console.log(aa && aa)
console.log(aa || bb)
console.log(aa || aa)
console.log(!bb)

//Ternary operator
console.log((2>1)? "It's correct :)":"It's False :(" )

// Conditional operator

if(2>2)
{
    console.log("NO")

}
else if(2<2)
{
    console.log("NO")


}
else if(2==2)
{
    console.log("YES")

}
else if(2==='2')
{
    console.log("no")

}
else
{
    console.log("blank")
}

// SWITCH

var k =5
switch(k)
{
            case 1 : 
            console.log("Today is Sunday");
            break                                               // Optional to put semi-colon
            case 2 : 
            console.log("Today is Monday");
            break
            case 3 : 
            console.log("Today is Tuesday");
            break
            case 4 : 
            console.log("Today is Wednesday");
            break
            case 5 : 
            console.log("Today is Thursday");
            break
            case 6 : 
            console.log("Today is Friday");
            break
            case 7 : 
            console.log("Today is Saturday");
            break
            default:
            console.log("unknown");                                 // Should use break if kept at first
}

