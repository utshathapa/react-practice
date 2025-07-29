


function Card(props) {
  return (
    <div className="container">
      <img src={props.image} alt="picture" />
      <h3>{props.title}</h3>
      <p>
       {props.description}
      </p>
    </div>
  );
}

export default Card;
