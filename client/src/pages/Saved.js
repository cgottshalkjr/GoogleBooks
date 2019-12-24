import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks = () => {
    API.getSavedBooks().then(res => this.setState({ savedBooks: res.data }));
  };

  render() {
    return (
      <Container>
        <NavBar />
        <Row>
          <Col size="xs-12">
            {!this.state.savedBooks.length ? (
              <h2>No Books to Display</h2>
            ) : (
              <BookList>
                {this.state.savedBooks.map(item => {
                  return (
                    <BookListItem
                      key={item.id}
                      title={item.title}
                      author={item.authors || ["Unavailable Information"]}
                      href={item.previewLink}
                      description={
                        item.description || "Unavailable Information"
                      }
                      thumbnail={item.thumbnail}
                    />
                  );
                })}
              </BookList>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
