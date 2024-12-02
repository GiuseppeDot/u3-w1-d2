// import { Component } from "react";
// import CommentArea from "./CommentArea";
// import { ListGroup } from "react-bootstrap";

// class CommentList extends Component {
//   render() {
//     return (
//       <ListGroup>
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//       </ListGroup>
//     );
//   }
// }
import React from "react";
import SingleComment from "./SingleComment";

const CommentList = ({ commentOfBooks }) => {
  return (
    <div>
      {commentOfBooks.length > 0 ? (
        commentOfBooks.map((comment, i) => {
          <SingleComment key={i} comment={comment} />;
        })
      ) : (
        <p>No comment</p>
      )}
    </div>
  );
};

export default CommentList;
