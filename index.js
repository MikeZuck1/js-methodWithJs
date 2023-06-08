// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
 
// step 1 
groceryList.shift(); 
console.log(groceryList);   

// step 2 
groceryList.unshift('popcorn'); 
console.log(groceryList);   
 
// step 3 
console.log(groceryList.slice(1, 4)); 

// step 4
console.log(groceryList);  

// step 5
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);  