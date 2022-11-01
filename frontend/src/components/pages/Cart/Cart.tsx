import React, { useContext, useEffect, useState } from 'react'
import { Dialog, DialogActions, DialogTitle, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material';
import { services } from '../../../service/services'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button } from '@mui/material';
import './Cart.css'
import SnackbarContext from '../../../contexts/MuiSnackbarContext';
import { BookType } from '../../../type/BookType';
import { CartType } from '../../../type/CartType';

const Cart = () => {
    const aServ = new services();
    const [cart, setCart] = useState<BookType[]>();
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<BookType>();
    const { displaySnackbarMessage } = useContext(SnackbarContext);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        aServ.getCart().then((res) => {
            setCart(res.data);
            console.log(cart)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    let arr: BookType[] = [];
    cart?.map((b: BookType, index: number) => {
        return arr[index] = b;
        console.log(b);
    })
    let total: number = 0;
    return (
        <div id="container">
            <Paper>
                <Table id="town table">
                    <TableHead>
                        <TableRow>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Book title</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Author</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Price</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arr.map((b: BookType) => {
                            total = total + parseFloat(b.price)
                            return (
                                <><TableRow id="colored" tabIndex={-1} key={b.isbn}>
                                    <TableCell align='center'>
                                        {b.title}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {b.author.firstname + " " + b.author.lastname}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {b.price}
                                    </TableCell>
                                    <TableCell>
                                        <a onClick={() => {
                                            setOpen(true);
                                            setSelected(b);
                                        }}>
                                            <DeleteIcon />
                                        </a>
                                    </TableCell>
                                </TableRow>
                                </>
                            )
                        })}
                        <TableRow id="colored" tabIndex={-1}>
                            <TableCell align='center'></TableCell>
                            <TableCell align='center'></TableCell>
                            <TableCell align='center'><b>{"Total: $" + total}</b></TableCell>
                            <TableCell align='center'></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
export default Cart;