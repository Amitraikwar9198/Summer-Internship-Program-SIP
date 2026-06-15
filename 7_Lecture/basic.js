function createbankaccount(ib){
    let b=ib;
    function deposit(a){
        b+=a;
        console.log(b);

    }
    function withdraw(a){
        b-=a;
        console.log(b);
    }
    function checkbalance(){
        console.log(b);
    }
    return{deposit, withdraw, checkbalance};
    
}
const acc=createbankaccount(2000);
acc.deposit(500);
acc.withdraw(300);
acc.checkbalance();
console.log(acc.b);


function multiplier(factor){
    return function(number){
        return factor*number;
    }
}
const t=multiplier(3);
console.log(t(10));