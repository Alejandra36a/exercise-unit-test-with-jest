// Oneuro is:
let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * (oneEuroIs.JPY / oneEuroIs.USD);
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * (oneEuroIs.GBP / oneEuroIs.JPY);
    return valueInPound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
