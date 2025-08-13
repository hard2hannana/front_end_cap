import greekSalad from "../assets/greekSalad.jpg";
import lemonDessert from "../assets/lemonDessert.jpg";
import bruchetta from "../assets/bruchetta.svg";


const specials = [
  {
    id: 1,
    image: greekSalad,
    name: "Greek Salad",
    description:
       "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
  },
  {
    id: 2,
    image: bruchetta,
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$5.99",
},
  {
    id: 3,
    image: lemonDessert,
    name: "Lemon Dessert",  
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
  }
]
export default specials;