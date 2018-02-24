// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var objectError = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var objectEmpty;

    var object = {}


    if (currency<=0){
        return objectEmpty = {};
    }
    else if (currency>=10000){
        return objectError;
    }
    else{
        var h = Math.floor(currency / 50);
        currency  = currency - 50 * h;
        if (25<=currency<=49){
            var q = Math.floor(currency / 25);
            currency = currency - 25 * q;
        }
        if(10<=currency<=24){
            var d = Math.floor(currency / 10);
            currency = currency - 10 * d;
        }
        if(5<=currency<=9){
            var n = Math.floor(currency / 5);
            currency = currency - 5 * n;
        }
        if(1<=currency<=4){
            var p = currency / 1;
            currency = 0;
        }

        if(h>0){
            object["H"] = h;
        }
        if(q>0){
            object["Q"] = q;
        }
        if(d>0){
            object["D"] = d;
        }
        if(n>0){
            object["N"] = n;
        }
        if(p>0){
            object["P"] = p;
        }
            
        return object;
    }
}
