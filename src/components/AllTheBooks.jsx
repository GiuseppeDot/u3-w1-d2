// import { Card, Col } from "react-bootstrap";
// import { Component } from "react";
// import horror from "../assets/data/horror.json";

// import { Container } from "react-bootstrap"

// class AlltheBooks extends Component {
//   render() {
//     return horror.map((libro) => {
//       return (
//         <Col key={libro.asin} className=" mb-5">
//           <Card className="card-size h-100">
//             <Card.Img className="w-100" variant="top" src={libro.img} />
//             <Card.Body>
//               <Card.Title>{libro.title}</Card.Title>
//               <Card.Text>{libro.price + "€"}</Card.Text>
//             </Card.Body>

//             <Card.Body>
//               <Card.Link href="#">Compra</Card.Link>
//             </Card.Body>
//           </Card>
//         </Col>
//       );
//     });
//   }
// }

// export default AlltheBooks;

import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const AlltheBooks = function (props) {
  return (
    <Container>
      <Row>
        {props.book.map((bookObject, i) => {
          //bookObject è il singolo libro dentro horror
          return (
            <Col key={i} xs={12} md={4} lg={3}>
              <SingleBook book={bookObject} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AlltheBooks;
