import { Accordion } from "react-bootstrap";

const Shutters = () => {
    return(
<div id="acc" className="padding-home">
<Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header >Loyal customer review #1</Accordion.Header>
    <Accordion.Body className="bg-acc">
      Absolutely fantastic service, very kind and polite customer service and support! Although the transaction didn't take place, the team went to great lengths to get a refund from the seller, which I received. The rates are also very competitive. Shoppre is highly recommended for anyone!!

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Loyal customer review #2</Accordion.Header>
    <Accordion.Body className="bg-acc">
      Very Good quality of support and shipment! Support team are always available, kindly and ready to give support by chat and by phone! My california ship is arrived very soon and i am truly very satisfied!! Thank You!!!!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Loyal customer review #3</Accordion.Header>
    <Accordion.Body className="bg-acc">
     Awesome service right from beginning to end. Miss Tanuna helped a lot at every step of the shipment. These guys know what they are doing and are the best. Can't ask more than this. Once more: Job well done. Cheers !!
    </Accordion.Body>
  </Accordion.Item>
</Accordion> 
</div>)
} 

export default Shutters;