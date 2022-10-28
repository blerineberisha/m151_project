import React from 'react'
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Book.css'
import { BookType } from '../../../type/BookType';

export const Book = ({
    id,
    image,
    book_title,
    author,
    book_description,
    price,
    publisher
}: BookType) => {
    if (!id) return <div />;
    return (
        <Card id="book">
            <Card.Img src={image} className="card-img" />
            <Card.Body className="card-body">
                <Card.Title>
                    {book_title} by {author}
                </Card.Title>
                <Card.Text className='more-info'>
                    <p>Price: {price}</p>
                </Card.Text>
            </Card.Body>
            <Card.Body>
                {book_description}
            </Card.Body>
        </Card>
    )
}