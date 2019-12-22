import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";


class Home extends Component {
    
    state = {
        books: [],
        bookSearch: ""

    }

    render() {
        return (
          <div>
            <NavBar />
            <Jumbotron />
            <Container>
              <Row>
                <Col size="md-12">
                  <form>
                    <Container>
                      <Row>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="bookSearch"
                            // value={this.state.recipeSearch}
                            // onChange={this.handleInputChange}
                            placeholder="Search For a Book"
                          />
                        </Col>
                        <Col size="xs-3 sm-2">
                          <Button
                            onClick={this.handleFormSubmit}
                            type="success"
                            className="input-lg"
                          >
                            Search
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </form>
                </Col>
              </Row>
              {/* <Row>
                <Col size="xs-12">
                  {!this.state.recipes.length ? (
                    <h1 className="text-center">No Recipes to Display</h1>
                  ) : (
                    <RecipeList>
                      {this.state.recipes.map(recipe => {
                        return (
                          <RecipeListItem
                            key={recipe.title}
                            title={recipe.title}
                            href={recipe.href}
                            ingredients={recipe.ingredients}
                            thumbnail={recipe.thumbnail}
                          />
                        );
                      })}
                    </RecipeList>
                  )}
                </Col>
              </Row> */}
            </Container>
          </div>
        );
      }
}

export default Home;


