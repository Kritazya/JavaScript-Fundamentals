var fr=['rabin', 'raush', 'mukesh', 'piyush']  //defining array
console.log(fr)
console.log(fr[3])
console.log(fr.length)

var frrr= new Array(1,2,3,4)    //defining array

console.log(fr.concat(frrr))
console.log(fr.join('='))

for(var a=0; a<fr.length; a++)
{
    console.log(fr[a])
}
for (const kuu of frrr) {
    console.log(kuu)
}

console.log(fr.pop())
console.log(fr)
// console.log(fr.push('Binods'))
fr.push('Binod')
console.log(fr)
console.log(fr.shift())
console.log(fr)
fr.unshift('Chaudary')
console.log(fr)
console.log(fr.sort())
console.log(fr.reverse())

//FIND, FILTER, MAP
age= [10,20,30,40,1,2,4,9]
var q= age.find(op)
function op(aa)
{
    return aa>15
}
console.log("find", q)

var fi= age.filter(sop)
function sop(bb)
{
    return bb>15
}
console.log("filter", fi)

var map= age.map(z)
function z(n)
{
    return n+10
}
console.log("map", map)

var afind=age.find((a)=>a>15)
console.log(afind)
var afilter=age.filter((a)=>a>15)
console.log(afilter)
var amap=age.map((a)=>a+15)
console.log(amap)
 var p =["aa","bb","cc"]
 console.log(p.slice(0,2))
