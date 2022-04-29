import { CardGroup, Card,  } from "react-bootstrap";
import { Row,Col } from "react-bootstrap";

const Cards_demo = () => {
    return(
<CardGroup id="cards" className="cards-padding">
 <Card>
    <a href="/items">

    <Card.Img variant="top" src="https://image.freepik.com/free-vector/cute-pastel-strawberry-seamless-pattern-background_39663-115.jpg" />
    <Card.ImgOverlay>
      
      <Card.Text className="text-cards">
       <h4> We provie the most fresh and ripped fruits you could ever find on a website who also sells fruits but we can say with the postive review of our loyal customers that we are one of the best here!
         </h4>
      </Card.Text>
    </Card.ImgOverlay>
  </a>
  </Card>
  <Card>
    <a href="/items">

    <Card.Img variant="top" src="https://media.istockphoto.com/vectors/organic-food-design-template-pastel-vegetables-background-detailed-vector-id959618340" />
    <Card.ImgOverlay>
      
      <Card.Text className="text-cards">
       <h4> So u have decided to make your life easy and leave the part of getting vegetables to us. very good choice we will do our best to provide you wuth the best and fresh veggies we grow with the association with very hard working farmers under our care.
      </h4></Card.Text>
    </Card.ImgOverlay>
  </a>
  </Card>
  <Card >
    <a href="/items">
    <Card.Img  variant="top" src="https://static.vecteezy.com/system/resources/previews/000/621/711/original/vector-green-cannabis-leaves-pattern.jpg" />
   <Card.ImgOverlay>
      <Card.Text className="text-cards">
      <h4> Ah~ so u had a very busy day and gonna rest now while getting your head light and breazzy for you my friend we got you the 420 you will always need :3
      </h4></Card.Text>
    </Card.ImgOverlay>
    </a>
  </Card>
</CardGroup>
    );
};

export default Cards_demo;