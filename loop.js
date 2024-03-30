// LOOPS : for, while, dowhile, forin, for of, cont, break;

// FOR LOOP
console.log("Loop starts HERE")

for(k=0; k<10; k++)
{
    console.log(k)
}
console.log("Loop ends HERE")

//While loop

var m=10;
while(m<100)
{
    console.log(m)
    m++;
}

// DO WHILE

var d=10
do{
    
    console.log(d)
    
    d++
}while(d<20)

var d=10
do{
    
    console.log(d)
    break;
    d++
}while(d<20)

// FOR OF
var a =['Kritazya', 'Bandana', 'BalKrishna', 'Christina']
for (const kk of a) {
    console.log(kk)
}

//FOR IN
var a = ['Kritazya', 'Bandana', 'BalKrishna', 'Christina']
for (const kkk in a) {
    console.log(kkk)
}
