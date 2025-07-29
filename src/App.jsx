import Card from "./Card.jsx";
import pizzaimage from "./assets/pizza.png";
import burgerimage from "./assets/burger.png";
import friesimage from "./assets/fries.png";
import chickenimage from "./assets/chicken.png";
function App(){
  return(
    <>
    <Card image={pizzaimage} title="Pizza" description="Deliciously cheesy with fresh toppings!"
    />
    <Card image={burgerimage} title="Burger" description="One bite at a time,remember,lifetime!"/>
    <Card image={friesimage} title="French fries" description="Crispy on the outside, soft on the inside!"/>
    <Card image={chickenimage} title="Chicken chilly" description="Sizzling hot, saucy, and oh-so-addictive!"/>
    

    </>

  );

}
export default App;