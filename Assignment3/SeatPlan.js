// JS PROGRAM TO SELECT A RANDOM STUDENT FOR THE SEAT PLANNING

const students = ["Susmita", "Samiksha", "Salipa", "Dikshya", "Rita"]; // first an array is created
const seatPlanning = []; //next an empty array is created
numOfStudents = students.length;
console.log("Before seat planning:"); // this gives you the aarangement of students before seat planning
for (i = 0; i < numOfStudents; i++) {
  console.log("seatNo." + (i + 1) + ":" + " " + students[i]);
}
while (numOfStudents != 0) {
  let randomSeatNo = Math.floor(Math.random() * numOfStudents); //random no. generated
  console.log(randomSeatNo);
  const pickedUpStudent = students[randomSeatNo]; //selecting random student
  seatPlanning.push(pickedUpStudent); //randomly selected student pushed to empty array
  students.splice(randomSeatNo, 1); //deleting randomly picked stdnt from students i.e updating array
  numOfStudents--;
}
console.log(seatPlanning); // this gives you arrangemnt of students after seat planning
console.log("After seat planning:");
for (i = 0; i < seatPlanning.length; i++) {
  console.log("seatNo." + (i + 1) + ":" + " " + seatPlanning[i]);
}
