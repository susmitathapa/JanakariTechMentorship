//PROGRAM TO DISPLAY AGE(RANDOM) ACCORDING TO GIVEN NAME THROUGH API CALL IMPLEMNTING ASYNC AND AWAIT

import fetch from "node-fetch";
import promptSync from "prompt-sync";

async function returnAge(argName) {
  try {
    //Passing data of name from argument in url by get method
    const response = await fetch(`https://api.agify.io/?name=${argName}`);
    const result = await response.json();

    // Object destructuring to extract name and age
    const { age, name } = result;
    console.log(`Age of ${name} is : `, age);
    // return { age:age, name:name };
  } catch (err) {
    console.log(err);
  }
}

// Window object is not defined in node.js environment(Vs code) so to use prompt-->
const prompt = promptSync();
var name = prompt("Enter name : ");

returnAge(name);
// const { age, name } = await returnAge(inputName);
// console.log(`Age of ${name} is : `, age);
