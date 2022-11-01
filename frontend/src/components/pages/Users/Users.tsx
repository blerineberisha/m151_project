import { RollerShades } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { services } from '../../../service/services'
import { Roles } from '../../../type/Roles';
import { Town } from '../../../type/Town';
import { User } from '../../../type/User';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import './Users.css'
import SnackbarContext from '../../../contexts/MuiSnackbarContext';

const Towns = () => {
    const aServ = new services();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [users, setUsers] = useState<User[]>([]);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<User>({ user_id: 0, username: "", email: "", password: "" });
    const { displaySnackbarMessage } = useContext(SnackbarContext);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        aServ.getUsers().then((res) => {
            setUsers(res.data);
        }).catch((e) => {
            console.log(e)
        })
    }, [users])

    let count = 0;
    return (
        <div id="container">
            <Paper>
                <Table id="town table">
                    <TableHead>
                        <TableRow>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Username</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Email</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Roles</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((u: User) => {
                            return (
                                <TableRow id="colored" tabIndex={-1} key={u.user_id}>
                                    <TableCell align='center'>
                                        {u.username}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {u.email}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {u.roles?.map((r: Roles) => {
                                            return r.name + " "
                                        })}
                                    </TableCell>
                                    <TableCell>
                                        <a onClick={() => {
                                            setOpen(true);
                                            setSelected(u);
                                        }}>
                                            <DeleteIcon />
                                        </a>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TablePagination
                        id='pag'
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[10]}
                        count={users.length}
                        onPageChange={handleChangePage}
                        page={page}
                    />
                </Table>
            </Paper>
            <Dialog
                key={selected.user_id}
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Are you sure you want to delete user {selected?.username}?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={() => {
                        aServ.deleteUser(selected.username);
                        setOpen(false);
                        displaySnackbarMessage('User deleted', 'success')
                    }}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default Towns;