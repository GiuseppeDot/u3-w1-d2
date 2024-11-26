import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex align-content-center flex-row col-12 col-md-6 col-lg-4 ">
          <div className="d-flex flex-row align-center">
            <h3>BookShop</h3>
            <ul>
              <li href="#">Home</li>
              <li href="#">About</li>
              <li href="#">Browser</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
