import { Grid3x3 } from '@mui/icons-material';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import React from 'react'
import { services } from '../../../service/services';
import { BookType } from '../../../type/BookType';
import { Book } from '../../atoms/Book/Book';
import './AllBooks.css'

const AllBooks = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [books, setBooks] = React.useState<BookType[]>([]);
    const aserv = new services();

    React.useEffect(() => {
        aserv.getBooks().then((res) => {
            setBooks(res.data);
        })
    }, [])

    return (
        <Grid id="grid" container item xs={8} md={8} spacing={3} alignContent={"center"} justifyContent={"center"}>
            {books.map((b: BookType) => {
                return (
                    <div>
                        <div id="box">
                            <Book
                                key={b.isbn}
                                isbn={b.isbn}
                                title={b.title}
                                //image={b.image}
                                description={b.description}
                                author={b.author}
                                price={b.price}
                                publisher={b.publisher}
                            />
                            <Button onClick={() => handleOpen}>Details</Button>
                        </div>
                        <Modal
                            open={open}
                            onClose={() => handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box id="modal">
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {b.title}
                                </Typography>
                                <Typography id="modal-modal-description">
                                    {b.description}
                                </Typography>
                            </Box>
                        </Modal>
                    </div>
                )
            })}
        </Grid>
    )
}

export default AllBooks;