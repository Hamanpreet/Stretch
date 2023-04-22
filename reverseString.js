const reverse = function() {
  //let arr = Array.from(str);
  //console.log(arr);
 
 
for(let y = 2; y < process.argv.length; y++) {
  let revStr = "";
  let result= [];
 for(let i = (process.argv[y].length - 1); i >= 0;i--) {
  result.push(process.argv[y][i]);
 }
 for( let i = 0; i < result.length; i++) {
  revStr += result[i];
 }
 console.log(revStr);
}
};
 

//const myInput = "hello goodbye";
reverse();

