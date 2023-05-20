const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 3, name: "zoidberg", age: 22 },
  { id: 2, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 52 }
];
const array = [10, 2, 5, 1, 9];
const sorted = array.sort((a,b) => {
  return a - b;
});
//console.log(sorted);

const comSorted = students.sort((a,b) => {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if(nameA === nameB) {
    if(a.age < b.age) {
      return -1;
    }
    else {
      return 1;
    }
  }
});
console.log(comSorted);