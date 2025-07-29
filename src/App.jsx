import Card from "./Card.jsx";
import Header from "./header.jsx"
import pizzaimage from "./assets/pizza.png";
import burgerimage from "./assets/burger.png";
import friesimage from "./assets/fries.png";

function App(){
  return(
    <>
    <Header/>
    <Card image={pizzaimage} title="Pizza" description="Deliciously cheesy with fresh toppings!"
    />
    <Card image={burgerimage} title="Burger" description="One bite at a time,remember,lifetime!"/>
    <Card image={friesimage} title="French fries" description="Crispy on the outside, soft on the inside!"/>
   

    </>

  );

}
export default App;