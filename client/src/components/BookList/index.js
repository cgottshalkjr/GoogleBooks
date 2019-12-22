import React from "react";
import {Container, Col, Row } from "../Grid";
// import "./style.css";

// This component exports both the List and ListItem components

export const BookList = ({ children }) => (
    <ul className="list-group">
        {children}
    </ul>
);

export function BookListItem({
    thumbnail,
    title,
    description,
    href
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <img src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>Description: {description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={href}>
                          Checkout Book!
              </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}