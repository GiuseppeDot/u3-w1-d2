import { Component, CommentList } from "react";

class CommentArea extends Component {
  state = {
    comment: [],
  };

  getComment = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzIzZDA2ZmM4YzAwMTU2Yjg3MDAiLCJpYXQiOjE3MzI4MDEwODUsImV4cCI6MTczNDAxMDY4NX0.vy8Me-EfEHI5yRuxGl-rEWXwSMslgOjylgW6WfxwJPk",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dei dati");
        }
      })
      .then((arrayOfComment) => {
        console.log("Commenti", arrayOfComment);
        this.setState({
          comment: arrayOfComment,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
  componentDidMount() {
    this.componentDidMount();
  }
  render() {
    return <CommentList commentOfBooks={this.state.comment} />;
  }
}

export default CommentArea;
