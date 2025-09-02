import lemonDessert from "../assets/lemonDessert.jpg";
import keyLime from "../assets/KeyLimeslice.jpg";
import cake from "../assets/chocolate-cake.webp";
import cheesecake from "../assets/cheesecake.webp";
import shrimp from "../assets/ShrimpCocktail+Sauce.webp";
import bruchetta from "../assets/bruchetta.svg";
import greenTomatoes from "../assets/fried-green-tomatoes.webp";
import wings from "../assets/wings-buffalo.webp";
import fish from "../assets/grilled-salmon.webp";
import steak from "../assets/fillet-mignon-steak.webp";
import pasta from "../assets/chicken-pasta.webp";
import burger from "../assets/cheeseburger.webp";						



const menu = [

  { 
    id: 1,
    category: "Appetizers",
    name: "Colossal Shrimp Cocktail",
    price: 16.95,
    description: "Enjoy our jumbo shrimp cocktail herb-poached shrimp, perfectly chilled and served with house-made cocktail sauce and fresh lemon",
    image: shrimp,
  },
  {
    id: 2,
    category: "Appetizers",
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
    image: bruchetta,
  },
  {
    id: 3,
    category: "Appetizers",
    name: "10 Wings", 
    price: 17.95,
    description: "Perfectly smoked chicken wings tossed in your choice of: Old Bay, Garlic Parm, BBQ, Hot, Mild, Sweet Thai Chili or Teriyaki",
    image: wings,
  },
  {
    id: 4,
    category: "Appetizers",
    name: "Fried Green Tomatoes", 
    price: 13.95,
    description: "Fried green tomatoes breaded in cornmeal and fried to a beautiful crust, topped with goat cheese crumbles, bacon bits and drizzled with a balsamic glaze",
    image: greenTomatoes,
  },
  {
    id: 5,
    category: "Entrees",
    name: "Classic Cheeseburger", 
    price: 16.95,
    description: "8 oz. angus beef patty, your choice of temperature, topped with your choice of cheese, leaf lettuce, tomato and pickles on a toasted brioche bun",
    image: burger,
  },
  {
    id: 6,  
    category: "Entrees",
    name: "Salmon", 
    price: 26.95,
    description: "Grilled or blackened salmon drizzled with teriyaki glaze and served with rice pilaf with grilled asparagus",
    image: fish,
  },
  {
    id: 7,
    category: "Entrees",
    name: "Filet Mignon",
    price: 48.95,
    description: "8 oz. premium beef tenderloin cooked to desired temperature, topped with a red wine demi-glace over asparagus and creamy mashed potatoes.",
    image: steak,
  },
  {
    id: 8,
    category: "Entrees",
    name: "Blackened Chicken Pasta",
    price: 21.95,
    description: "Chicken blackened and grilled served atop homemade fettuccini tossed in a parmaesean cream sauce.",
    image: pasta,
  },
  {
    id: 9,
    category: "Desserts",
    name: "Cheesecake",
    price: 8.95,
    description: "House prepared cheesecake drizzled with caramel, chocolate and toasted pecans.",
    image: cheesecake,
  },
  {
    id: 10,
    category: "Desserts",
    name: "Key Lime Pie",
    price: 8.95,
    description: "A bright and sunny Florida citrus classic, Served with fresh house made whipped cream.",
    image: keyLime,
  },
  {
    id: 11,
    category: "Desserts",
    name: "Lemon Dessert",  
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "5.00",
    image: lemonDessert,
  },
  {
    id: 12,
    category: "Desserts",
    name: "Mile High Dark Chocolate Cake",
    price: 8.95,
    description: "6 incredible layers of milk chocolate deliciousness, Served with fresh strawberries!",
    image: cake,
  }
]

export default menu