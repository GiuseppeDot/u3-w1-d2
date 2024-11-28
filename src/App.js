import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AlltheBooks from "./components/AllTheBooks";
import bookJson from "./assets/data/horror.json";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main>
        <AlltheBooks book={bookJson} />
      </main>
      <footer>
        <Container>
          <Row>
            <Col>
              <MyFooter />
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
