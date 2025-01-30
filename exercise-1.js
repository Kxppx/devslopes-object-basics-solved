/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const mcDonalds = {
  name: "McDonald's",
  cuisines: ["Burgers", "Sandwiches"],
  numberOfStars: 5,
  favorited: true,
};

const newObjectProperty1 = "address";
const newObjectProperty2 = "zipcode";
const newObjectProperty3 = "acceptsReservations";
mcDonalds[newObjectProperty1] = "123 Main rd.";
mcDonalds[newObjectProperty2] =  333777;
mcDonalds[newObjectProperty3] =  true;

mcDonalds.numberOfStars += 1;
mcDonalds.favorited = !mcDonalds.favorited;
mcDonalds.cuisines.push("Breakfast");

function retrieveProperty(obj, str) {
  if (str in obj) {
    return obj[str];
  } 
  else return "The information you requested does not exist.";
};
console.log(retrieveProperty(mcDonalds, "favorited"));
