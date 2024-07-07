"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFive(num) {
    return num + 5;
}
var addSeven = function (num) {
    return num + 7;
};
function getUppercase(str) {
    return str.toUpperCase();
}
var getLowerCase = function (str) {
    return str.toLocaleLowerCase();
};
function isNumGreaterThanFive(num) {
    return num > 5;
}
var isNumLessThanFive = function (num) {
    return num < 5;
};
function loginUser(name, pass, isAdmin) { }
var heros = ["Dhoni", "Virat", "Rohit", "Yuvraj", "Gautam"];
var print = heros.map(function (hero) {
    return "".concat(hero, " is in my cricket team");
});
function fn(x) {
    //do something
}
function fail(msg) {
    throw new Error(msg);
}
