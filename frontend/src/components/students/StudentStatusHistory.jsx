import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Box } from '@material-ui/core';
import Button from '@mui/material/Button';

import { StyledTableCell, StyledTableRow } from '../common/StyledTable';
import StudentRequest from '../../requests/student-request';
import { getDateFormat } from '../../utils/common';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';

const StudentStatusHistory = () => {
    const [status, setStatus] = useState({});
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        StudentRequest.getStatusHistory(id).then(result => setStatus(result));
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <TableContainer sx={{ mt: 3 }} component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Student Name</StyledTableCell>
                            <StyledTableCell align="center">Student Id</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Updated By</StyledTableCell>
                            <StyledTableCell align="center">Updated At</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {status.student_status_history &&
                            status.student_status_history.map((history, index) => (
                                <StyledTableRow key={index} widht="100%">
                                    <StyledTableCell align="center">{history && history.name}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {history && history.history_student_id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{history && history.status}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {history && history.updated_by.user_name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {getDateFormat({ date: history && history.created_at })}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box m={2} pt={2} sx={{ color: '#1876d0' }}>
                <Button
                    onClick={() => {
                        history.push('/students');
                    }}
                    variant="contained"
                    style={{ width: '10%' }}
                >
                    Back
                </Button>
            </Box>
        </>
    );
};

export default StudentStatusHistory;
