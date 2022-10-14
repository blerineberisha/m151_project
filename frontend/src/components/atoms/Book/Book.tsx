import React from 'react'
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Book.css'

export type BookType = {
    id: number;
    image: string;
    book_title: string;
    author: string;
    book_description: string;
    price: string;
    publisher: string;
};

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
            <Button href={'/book' + id} className='button'>
                View
            </Button>
        </Card>
    )
}