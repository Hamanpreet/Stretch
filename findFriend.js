const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = function(data, contactName, field) {
  const results = {};
  for (let item of data) {
    if (item.name === contactName) {
      const friendName = item.friends[0];
      results["name"] = friendName;
      
    }
  }

  for(let item of data) {
    if (item.name === results.name && item[field]) {
      results[field] = item[field];
      return results;
    }
  }
  return "Not found";
  
};

console.log(findFriend(contacts, "Buster", "email"));
//Object.keys(item).includes(field);

//Without the use of loops
// const findFriend = function(data, contactName, field) {
//   const result = data.find(item => item.name === contactName);

//   if (result) {
//     const friendName = result.friends[0];
//     const friendData = data.find(item => item.name === friendName && item[field]);
    
//     if (friendData) {
//       return { name: friendData.name, [field]: friendData[field] };
//     }
//   }

//   return "Not found";
// };