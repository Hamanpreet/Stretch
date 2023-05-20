const pigLatin = function() {
  let str = "";
for(let i = 2; i < process.argv.length; i++) {
  str = str + process.argv[i].slice(1) + process.argv[i][0] + "ay ";
   // console.log(process.argv[i].slice(1));
  //console.log(str);
  }
  return str;
}
  console.log(pigLatin());

