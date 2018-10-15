import React from "react";
import { connect } from "react-redux";
import store from '../store/store'
const books = props => {
   console.log(store.getState())
  return (
    <div>
      <div>BOOKS LIST:</div>

      <hr />
      <div>
        <form onSubmit={event => props.handleSubmit(event, props.searchValue)}>
          <input value={props.searchValue} onChange={props.handleInputChange} />
        </form>
      </div>
      <hr />
      <div>
        {props.booksList.map(book => {
          return (
            <div
              className="card"
              style={{ width: "18rem", display: "inline-block" }}
            >
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">{book.language}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    booksList: state.books,
    searchValue: state.searchValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: event => {
      const action = { type: "INPUTCHANGE", value: event.target.value };
      dispatch(action);
    },
    handleSubmit: (event, inp) => {
      event.preventDefault();
      console.log("submit");

      const action = { type: "SUBMIT", value: inp };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(books);
