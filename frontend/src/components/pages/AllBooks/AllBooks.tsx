import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import React from 'react'
import { services } from '../../../service/services';
import { BookType } from '../../../type/BookType';
import { Book } from '../../atoms/Book/Book';
import CloseIcon from '@mui/icons-material/Close';
import './AllBooks.css'

const AllBooks = () => {
    const [open, setOpen] = React.useState(false);
    const [books, setBooks] = React.useState<BookType[]>([]);
    const [selected, setSelected] = React.useState<BookType>({ isbn: "", title: "", description: "", author: { author_id: 0, firstname: "", lastname: "" }, price: "", publisher: "", genre: "" });
    const aserv = new services();

    React.useEffect(() => {
        aserv.getBooks().then((res) => {
            setBooks(res.data);
        })
    }, [])

    return (
        <>
            <Grid id="grid" container item spacing={3} alignContent={"center"} justifyContent={"center"}>
                {books.map((b: BookType) => {
                    return (
                        <div>
                            <div id="box" key={b.isbn}>
                                <Book
                                    key={b.isbn}
                                    isbn={b.isbn}
                                    title={b.title}
                                    description={b.description}
                                    author={b.author}
                                    price={b.price}
                                    publisher={b.publisher}
                                    genre={b.genre} />
                                <Button onClick={() => {
                                    setSelected(b)
                                    setOpen(true);
                                }}
                                >Details</Button>
                            </div>
                        </div>
                    );
                })}
            </Grid>
            <Modal
                key={selected.isbn}
                open={open}
                onClose={() => {
                    setSelected({ isbn: "", title: "", description: "", author: { author_id: 0, firstname: "", lastname: "" }, price: "", publisher: "", genre: "" });
                    setOpen(false);
                }}>
                <Box id="modal" key={selected.isbn}>
                    <Grid container>
                        <Grid item xs={6} sm={6}>
                            <Typography variant="h6" component="h2">
                                {selected.title + " by " + selected.author?.firstname + " " + selected.author.lastname}
                            </Typography>
                            <Typography>
                                {selected.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Typography variant='h6' component="h2">
                                {"$" + selected.price}
                            </Typography>
                            <Typography variant='h6' component="h2">
                                {"Genre: " + selected.genre}
                            </Typography>
                            <Typography variant='h6' component="h2">
                                {"ISBN: " + selected.isbn}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button onClick={() => setOpen(false)}>
                        <CloseIcon id="close" />
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default AllBooks;