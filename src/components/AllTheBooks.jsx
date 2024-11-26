import { Card, Col } from "react-bootstrap";
import { Component } from "react";
import horror from "../assets/data/horror.json";

class AlltheBooks extends Component {
  render() {
    return horror.map((libro) => {
      return (
        <Col>
          <Card key={libro.asin}>
            <Card.Img className="w-100" variant="top" src={libro.img} />
            <Card.Body>
              <Card.Title>{libro.title}</Card.Title>
              <Card.Text>{libro.price + "€"}</Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="#">Compra</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
}

export default AlltheBooks;
