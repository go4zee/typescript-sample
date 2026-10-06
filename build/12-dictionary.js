"use strict";
let dictionary = new Map();
dictionary.set("a", "apple");
console.log(dictionary.get("a"));
dictionary.set("b", "banana");
console.log(dictionary.get("b"));
if (dictionary.has("a")) {
    console.log("Dictionary has key 'a'");
}
dictionary.delete("a");
console.log(dictionary.get("a"));
if (dictionary.has("a")) {
    console.log("Dictionary has key 'a'");
}
else {
    console.log("Dictionary does not have key 'a'");
}
