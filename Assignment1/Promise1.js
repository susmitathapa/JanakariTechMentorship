//CREATE A PROMISE THAT TAKES DATA AS STRING AND WRITES TO A FILE

//I've performed all file operations here

const fs = require("fs");

//file status
function getStat(filename) {
  fs.promises
    .stat(filename)
    .then((content) => console.log(content)) //it returns the information about the given file(promise.txt)
    .catch((err) => console.log(err));
}

let fname = "promise.txt";
getStat(fname);

//accessing a file
function checkAccess(filename) {
  console.log("access:", filename);
  fs.promises
    .access(filename) //access the file
    .then(() => console.log("File exists")) //if file exists returns this
    .catch((err) => console.log("Doesnot exist")); //if not then gives this error msg
}
checkAccess(fname);

//WRITING TO A FILE    (GIVEN ASSIGNMENT)
const data = "I'm practicing promises";
fs.promises
  .writeFile(fname, data) //writes data to promise.txt
  .then(() => {
    console.log("Resolved,written to file"); //if resolved gives this msg
  })
  .catch((err) => {
    console.log(err); //else gives err msg
  });

//reading a file
fs.promises
  .readFile(fname, "utf8") //reads the content of promise.txt
  .then((content) => {
    console.log("File content:", content); //shows the content of the file
  })
  .catch((err) => {
    console.log(err);
  });
