function tax(n) {
    if(n<250000) {
        return "No TAX";
    } else if((n>=250000)&&(n<500000)) {
        let tax=(n*10)/100;
        return tax;
    } else if((n>=500000)&&(n<1000000)) {
        let tax=(n*20)/100;
        return tax;
    } else if((n>=1000000)) {
        let tax=(n*30)/100;
        return tax;
    }
}

module.exports = tax;