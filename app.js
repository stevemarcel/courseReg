let name = "Stephen Onyejuluwa";
let courses = ["HTML", "CSS", "JavaScript", "NodeJS", "Csharp", "design"] ;

console.log(`Name: ${name}`);
console.log(`Courses: ${courses}`);

for (let i = 1; i <= 200; i++) {
  let chkOddOrEven = courses.length % 2;

  if (i % 2 === chkOddOrEven) {
   console.log(i);
  } 
}