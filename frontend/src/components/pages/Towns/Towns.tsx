import { Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { services } from '../../../service/services'
import { Town } from '../../../type/Town';
import './Towns.css'

const Towns = () => {
    const aServ = new services();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [towns, setTowns] = useState<Town[]>([]);
    const [selected, setSelected] = useState<Town[]>([]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    useEffect(() => {
        aServ.getTowns().then((res) => {
            setTowns(res.data);
        }).catch((e) => {
            console.log(e)
        })
    }, [])
    return (
        <div id="container">
            <Paper>
                <Table id="town table">
                    <TableHead>
                        <TableRow>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Town</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Zip code</b>
                            </TableCell>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Country</b>
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {towns.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((t: Town) => {
                            return (
                                <TableRow id="colored" tabIndex={-1} key={t.zip}>
                                    <TableCell align='center'>
                                        {t.name}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {t.zip}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {t.id_country.name}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TablePagination
                        id='pag'
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[10]}
                        count={towns.length}
                        onPageChange={handleChangePage}
                        page={page}
                    />
                </Table>
            </Paper>
        </div>
    );
}
export default Towns;