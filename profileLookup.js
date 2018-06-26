
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line

for (var i =0; i< contacts.length; i++){  //loops through contacts
  if (name === contacts[i].firstName){    //confirms if name exists
    if(contacts[i].hasOwnProperty(prop)){ //confirms if prop exists after name is varified
      return contacts[i][prop];           //returns the value of property
    }else {                               //if neither name or prop exists then the following code executes
      return "No such property";
    }
  }
}
return "No such contact";




// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
