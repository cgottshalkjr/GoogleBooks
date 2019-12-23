import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input"
import Button from "../components/Button";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";

class Saved extends Component {

    state = {
        books: []
    }

    render (){
        return (
        <Container>
             <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <h2>No Books to Display</h2>
                            ) : (
                                    <BookList>
                                        {this.state.books.map(item => {
                                            return (
                                                
                                                    
                                                <BookListItem

                                                    key={item.id}
                                                    title={item.volumeInfo.title}
                                                    author={item.volumeInfo.authors || ["Unavailable Information"]}
                                                    href={item.volumeInfo.previewLink}
                                                    description={item.volumeInfo.description || "Unavailable Information"}
                                                    thumbnail={
                                                        item.volumeInfo.imageLinks
                                                            ? item.volumeInfo.imageLinks.thumbnail
                                                            : "https://visualhunt.com/photos/2/eyeglasses-on-open-book.jpg?s=s"
                                                    }
                                                />
                                                
                                               
                                            );
                                            
                                        })}
                                    </BookList>
                                )}
                        </Col>
                    </Row>
        </Container>
        )
    }


}

export default Saved;