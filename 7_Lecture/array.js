//Create Array
//Using Array literal
var fruits=["Apple", "Banana" , "Mango"];
console.log(fruits);
//Using Array Construct
// let fruits=newArray("Apple", "Banana", "Mango");

//lenght
//array ka size batana 
console.log(fruits.length);

//push
//array ke ander element daal dega
//last me element daalega

fruits.push("watermelon");
console.log(fruits);




// includes
// check karta hai ki element present hai yah nahi
console.log(fruits.includes("Mango"));


// indexof
console.log(fruits.indexOf("Mango"));

//join

//saare element join kardega jisse bhi join karna ho 
console.log(fruits.join("-"))


//element batayega uss range ke 
console.log(fruits.slice(1,3));

//element batayega uss range ke right bound tak
console.log(fruits.splice(1,3));

//normal for loops
console.log("normal For loop");
fruits=["Apple", "Banana" , "Mango"];
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//for of loop
console.log("For of loop");
for(i of fruits){
    console.log(i);
}

//for each
console.log("ForEach loop");
fruits.forEach(function(i){
    console.log(i);
})

let array=[1,2,3,6,4,5,6,7,8,9];
//Advanced array method
//map
//saare element par condition apply kardege
const double=array.map(function(x){
    return x*2;
});
const doubledemo=array.map(x=>x*2);
console.log(double);
console.log(doubledemo);
console.log(array);

//filter
//condition check karega 
//jo bhi element condition pass hogi voh new new array me jayega
const even = array.filter(function(x){
    return x%2==0;

}) 
console.log(even);
const odd=array.filter(x=>x%2!=0);
console.log(odd);

//reduce
//saare element ko ek variable me convert karega 
const sum=array.reduce(function(sum,x){
    return sum+x;
},0);
console.log(sum);
const sum1=array.reduce(function(sum,x){
    return sum+x;
});
console.log(sum1);

const sum2=array.reduce((sum,x)=>sum+x,0);
const sum3=array.reduce((sum,x)=>sum+x);
console.log(sum2);
console.log(sum3);

//find 
//jaise hi condition satisfy hofi baise hi
const f=array.find(function(x){
    return 3
});
const fdemp=array.find(x=>x>3);
console.log(f);
console.log(fdemp);

//some
//bata hai ki condition  kuch element satisfy kar rahi hai ya nai
const s=array.some(function(x){
    return x>3;
});
const sdemo=array.some(x=>x>3);
console.log(s);
console.log(sdemo);

//every
//batata hai ki saare element satify karta hai ya nahi
const e=array.every(function(x){
    return x>5;
});
const edemo=arrat.every(x=>x>5);
console.log(e);
console.log(edemo);