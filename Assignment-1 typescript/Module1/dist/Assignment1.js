"use strict";
{
    // problem 1
    function formatString(input, toUpper) {
        if (toUpper === true) {
            const stringUppercase = input.toUpperCase();
            return stringUppercase;
        }
        else if (toUpper === false) {
            const stringLowercase = input.toLowerCase();
            return stringLowercase;
        }
        return input;
    }
    const string = formatString('hello', true);
    console.log(string);
}
