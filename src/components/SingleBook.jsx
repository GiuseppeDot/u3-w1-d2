// deve ricevere delle proprioetà di un singolo libro, quindi si mette props nel parametro

// riceviamo una prop che si chiama "book" (parola scelta da me)
import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  //nei componenti a classe props non si puo definire iìcome in un parametro dei componenti a funzione, dinque in quelli a classe, props
  //si trova dentro il "this" this.props

  render() {
    return (
      <>
        <Card className={this.state.selected ? "selected" : " "}>
          <Card.Img
            onClick={() => {
              this.setState({
                selected: !this.state.selected, //opposto del valore attuale
              });
            }}
            variant="top"
            src={this.props.book.img}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text> €{this.props.book.price} </Card.Text>
          </Card.Body>
        </Card>
        {/* <CommentArea asin={this.props.book.asin} /> */}
      </>
    );
  }
}

export default SingleBook;
