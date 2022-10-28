import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'
import { BookType } from '../../../type/BookType';
import { Book } from '../../atoms/Book/Book';
import './AllBooks.css'

const AllBooks = () => {
    const [books, setBooks] = React.useState<BookType[]>([{
        id: 1,
        image: "url",
        book_title: "title",
        author: "author",
        book_description: "desc",
        price: "23$",
        publisher: "me"
    },
    {
        id: 2,
        image: "url",
        book_title: "title",
        author: "author",
        book_description: "desc",
        price: "23$",
        publisher: "me"
    },
    {
        id: 3,
        image: "url",
        book_title: "title",
        author: "author",
        book_description: "desc",
        price: "23$",
        publisher: "me"
    }]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {books.map((b: BookType) => {
                return (
                    <div id="box" key={b.id}>
                        <Book
                            id={b.id}
                            book_title={b.book_title}
                            image={b.image}
                            book_description={b.book_description}
                            author={b.author}
                            price={b.price}
                            publisher={b.publisher}
                        />
                        <Button onClick={() => handleOpen}>Open modal</Button><Modal
                            open={open}
                            onClose={() => handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box id="modal">
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {b.book_title}
                                </Typography>
                                <Typography id="modal-modal-description">
                                    {b.book_description}
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                )
            })}
        </>
    )
}

export default AllBooks;