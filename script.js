// Added an alert to display a welcome message to the user
alert(`"Welcome to ProCurls - The Textured Hair Care Product Filter 🤍🖤💚"
This is a platform to help people with curly/coiled hair to source a range of hair care products from different brands under one roof! Isn't that amazing?!🎊🎊🎊"`);
// checking output
console.log(alert);

// Using a While loop to ask for the user input
let hairtype;
while (true) {
  hairtype = prompt("What is your hair type? 1 - 4");
  console.log(hairtype);

  if (hairtype === "4") {
    console.log("4");
    alert("🤩 You have either Type 4a , 4b or 4c hair texture! 🤩");
    // Exiting the loop after hairtype 4 is inputted
    break;
  } else if (hairtype == "1") {
    console.log("1");
    alert("🤩 You have either Type 1a , 1b or 1c hair texture! 🤩");
    // Exiting the loop after hairtype 1 is inputted
    break;

  } else if (hairtype == "2") {
    console.log("2");
    alert("🤩 You have either Type 2a , 2b or 2c hair texture! 🤩");
    // Exiting the loop after hairtype 2 is inputted
    break;

} else if (hairtype == "3") {
    console.log("3");
    alert("🤩 You have either Type 3a , 3b or 3c hair texture 🤩!");
    // Exiting the loop after hairtype 3 is inputted
    break;

  } else {
    alert("Please enter your hair type number");
  }
}
// maniputlating HTML element in Javascript
document.getElementById("myh1").textContent = `ProCurls`;

// Array of objects
let products = {
data:[
    {
productName: "Cantu Avocado Hydrating Shampoo 400ml",
category: "Shampoo",
price: "8.00",
image: "cantu-shampoo.avif",
},

{
    productName: "Shea Moisture Coconut & Hibiscus Curl & Shine Shampoo 379ml",
    category: "Shampoo",
    price: "10.99",
    image: "sheamoisture-shampoo.avif",
    },
    
    {
    productName: "Mielle Organics Rosemary Mint Strength Shampoo 355ml",
    category: "Shampoo",
    price: "9.99",
    image: "mielle-shampoo.jpeg",
    },

    {
    productName: "Cantu Shea Butter for Natural Hair Sulfate-Free Hydrating Cream Conditioner 400ml",
    category: "Conditioner",
    price: "7.00",
    image: "cantu-conditioner.avif",
    },

    {
    productName: "Mielle Rosemary Mint Strengthening Conditioner 355ml",
    category: "Conditioner",
    price: "10.99",
    image: "mielle-conditioner2.avif",
    },

    {
    productName: "Shea Moisture Coconut & Hibiscus Curl & Shine Conditioner 384ml",
    category: "Conditioner",
    price: "12.99",
    image: "sheamoisture-conditioner.avif",
    },

    {
      productName: "Mielle Organics Rosemary Mint Repair Cream 240ml",
      category: "Moisturizer",
      price: "9.99",
      image: "mielle-haircream.avif",
      },

    {
    productName: "Shea Moisture Coconut & Hibiscus Curl & Style Milk 254ml",
    category: "Moisturizer",
    price: "12.99",
    image: "sheamoisture-haircream.avif",
    },

    {
    productName: "Cantu Shea Butter for Natural Hair Moisturizing Curl Activator Cream 355ml",
    category: "Moisturizer",
    price: "12.99",
    image: "cantu-moisturizing haircream.avif",
    },

    {
    productName: "Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil 59ml",
    category: "Oils",
    price: "10.99",
    image: "mielle-oil.avif",
    },

    {
    productName: "Shea Moisture Jamaican black castor oil strengthen & restore oil serum 59ml",
    category: "Oils",
    price: "10.19",
    image: "sheamoisture-oil.webp",
    },                        
    {
    productName: "Cantu Strengthening Biotin-Infused Hair and Scalp Oil 59ml",
    category: "Oils",
    price: "9.99",
    image: "cantu-oil.avif",
    },    
],
};

// Loop Example
for(let i of products.data){

// Create Card - DOM manipulation
let card = document.createElement("div");

// Card should have category and stay hidden initially
card.classList.add("card", i.category, "hide");


// image div
let imgContainer = document.createElement("div");
imgContainer.classList.add("image-container");
// img tag
let image = document.createElement("img");
image.setAttribute("src", i.image);
imgContainer.appendChild(image);
card.appendChild(imgContainer);
// container
let container = document.createElement("div");
container.classList.add("container");
// // product name 
// h5 element is created for displaying the product name
let name = document.createElement("h5");
name.classList.add("product-name");
name.innerText = i.productName.toUpperCase();
container.appendChild(name);

// price - h6 element is created for displaying the product price. The price is set by concatenating the pound symbol ("£") with the value from i.price. The price element is then appended to the container.
let price = document.createElement("h6");
price.innerText = "£" + i.price;
container.appendChild(price);

card.appendChild(container);
document.getElementById("products").appendChild(card);
}

// Parameter passed from button (Parameter same as catergory)
// Example of function - used to filter and display products based on categories, it will be triggered by buttons with the class '.button-value'.
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach(button => {
// Check if values equals innerText
if(value.toUpperCase() == button.innerText.toUpperCase()){

  button.classList.add("active");
}
else{

  button.classList.remove("active");
}
  });

  // select all cards
  let elements = document.querySelectorAll(".card");
  // loop through all cards /*
  elements.forEach((element) =>{
// display all cards on 'All' button click
if(value == "All"){

  element.classList.remove("hide");
}
else{
  // check if element contains category class
  // if(element.classList.contains(value)){
    if(element.classList.value.toLowerCase().includes(value.toLowerCase())){

      // display element based on category
element.classList.remove("hide");
  } else{
// hide other elements
element.classList.add("hide");
  }
}
  });
  
}

// Search button click 
// EventListener example
document.getElementById("search").addEventListener("click",() => {
// initializations
let searchInput = document.getElementById("search-input").value;
let elements = document.querySelectorAll(".product-name");
let cards = document.querySelectorAll(".card");
filterProduct(searchInput);
});

// Initially display all products
window.onload = () => {
  filterProduct("All");
}
