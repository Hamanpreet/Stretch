const reverse = function() {
  //let arr = Array.from(str);
  //console.log(arr);
 let result= [];
 let revStr = "";
for(let y = 2; y < process.argv.length; y++) {
 for(let i = (process.argv[y].length - 1); i >= 0;i--) {
  result.push(process.argv[y][i]);
 }
}
 
for( let i = 0; i < result.length; i++) {
  revStr += result[i];
 }
 return revStr;
};

console.log(reverse());

