//Length
//string ki size batayega
let name="dSfbhkSdf";
console.log(name.length);

//touppercase
//string char convert into uppercase

console.log(name.toUpperCase());

//tolowercase
//string char convert into lowercase

console.log(name.toLowerCase());

//trim
//space ko trim kar dega left and right side both
let a="   Amit   ";
console.log(a.trim());


//includes
//bata hai ki string og string me h yah nahi
let j="javascript is not awesome";
console.log(j.includes("is"));

//start with
////batata hai ki koi word usse start ho raha h ya nahi
let k="javascript is not awesome";
console.log(k.startsWith("ja"));

//end with
//batata hai ki koi word usse end ho raha h ya nahi
let b="fsd sdfsdfa fsdf dsfdf sdfsd sdffs";
console.log(b.endsWith("sd"));

//indexof
//index batayega ki kaoin se index par word hai
//word ke start char ka index batata h

console.log(k.indexOf("is"));

// lastindexof
//word ke last char ka index batata h
console.log(k.lastIndexOf("ome"));

//slice
//range me jitne element padhe h voh return karega
console.log(k.slice(2,10));

//substring 
//range me jitne element padhe h voh return karega
console.log(k.substring(2,10));

//replace
//jaha pahe voh word dikhta vahi change kar deta h
console.log(k.replace("not"," "));

//replaceall
//jaha poore string me vo word dikhega vahi change kar deta h
console.log(k.replaceAll("not"," is"));

//split
console.log(k.split(" "));
console.log(k);

