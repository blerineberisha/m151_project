import React from 'react'
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Book.css'
import { BookType } from '../../../type/BookType';


export const Book = ({
    isbn,
    image,
    title,
    author,
    description,
    price,
    publisher
}: BookType) => {
    if (!isbn) return <div />;
    return (
        <>
            <Card id="book">
                <Card.Img src={image} className="card-img" />
                <Card.Body className="card-body">
                    <Card.Title>
                        {title} by {author}
                    </Card.Title>
                    <Card.Text className='more-info'>
                        <p>Price: {price}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    {description}
                </Card.Body>
            </Card>
        </>
    )
}