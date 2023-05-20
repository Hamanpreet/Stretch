const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f02", "f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f02", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};
// const biggestFollower = function() {
//   let sum = 0;
//   let follower = 0;
//   let biggestFollower = "";
//   const val = Object.values(data);
//   for(let item of val) {
    
//     //console.log(item);
//     const arr = item.follows;
//     //console.log(item.name);
//     follower = arr.length;
//     //console.log(follower);
//     if (follower > sum) {
      
//       biggestFollower = item.name;
//     }
//   }
//   return biggestFollower;
// };
//console.log(biggestFollower(data));

const mostPopular = function() {
  const results = {};
  let highestFollowers = 0;
  var name = "";
  const val = Object.values(data);
  for (let item of val) {
    const arr = item.follows;
    
    for (const letter of arr) {
      if (results[letter]) {
        results[letter] += 1;
      }
      else {
        results[letter] = 1;
      }
    } 
  }
  for( let key in results) {
    console.log(results[key]);
    if(results[key] > highestFollowers) {
      highestFollowers = results[key];
      name = data[key]['name'];
    }
  }
  console.log(results);
  //console.log(name);
  return name;
  //returns mostFollowed;
};
//console.log(mostPopular(data));

const printAll = function() {
  const list = {};

  
  const keys = Object.keys(data);
  const values = Object.values(data);
  for (let key of keys) {
   
    //console.log(val i)
    if(!list[key]) {
      list[key] = {};
      list[key]["name"] = data[key].name;
      list[key]["follows"] = data[key].follows;
      
    }
    else {
      list[key]["name"].push(data[key].name);
      list[key]["follows"].push(data[key].name);
      
    }
    for (let val of values) {
      console.log(val);
      if (val.follows.includes(key)) {
        if(list[key]["follower"]) {
        
        list[key]["follower"].push(val.name);
      }
      else {
        list[key]["follower"] = [];
        list[key]["follower"].push(val.name);
      }
    }
      
    }

    
  }
  
  return list;
};
console.log(printAll(data));

