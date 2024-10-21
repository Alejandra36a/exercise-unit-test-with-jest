const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(1);
    const expected = 1 * 1.07;
    expect(dollars).toBe(expected);
});

test("1 dollar should be approximately 146.4486 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});

test("1 yen should be approximately 0.00556 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected);
});