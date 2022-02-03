"use strict";

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
//
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
  var index = str.lastIndexOf(" ");
  var last = str.slice(index + 1, str.length);
  return last;
};

// 2) ---------------------
//
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
  let words = str.split(" ");
  let last = words[words.length - 1];
  return last;
};

// 3) ---------------------
//
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
  let arr = str.split(" ");
  let searchI = arr.indexOf("I");
  console.log(arr);
  if (searchI != -1) arr.splice(searchI, 1, "We");
  let searchAm = arr.indexOf("am");
  if (searchAm != -1) arr.splice(searchAm, 1, "are");
  let searchWas = arr.indexOf("was");
  if (searchWas != -1) arr.splice(searchWas, 1, "were");
  let res = arr.join(" ");
  return res;
};

// 4) ---------------------
//
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street"
//
// ------------------------

const arrToStr = (arr) => {
  arr.splice(4, 1, `${arr[4]},`);
  let res = arr.join(" ");
  return res;
};

// 5) ---------------------
//
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
  let arr = str.split(" ");
  let counter = 1;
  let res = [];
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    let strArr = arr[i].split("");
    res = [];
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] == strArr[i + 1]) {
        counter++;
      } else if (strArr[i] == " ") {
        continue;
      } else {
        res.push(`${strArr[i]}${counter}`);
        counter = 1;
      }
    }
    let word = res.join("");
    finalArr.push(word);
  }
  return finalArr.join(" ");
};

module.exports = {
  LastWord,
  LastWord_2,
  replaceWords,
  arrToStr,
  letterCounter,
};
