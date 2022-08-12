import { Box, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useHistory } from 'react-router';

import {
    partnerStatusOptions,
    studentsCourseOptions,
    studentsStatusColorOptions,
    studentsStatusOptions,
    explanationStatusOptions,
    partnercompanyOptions,
    degreeOptions,
    relocationOptions
} from '../../constants';
import { getDateFormat, getStatusColor, getValueOption } from '../../utils/common';
import { StyledTableCell, StyledTableRow } from '../common/StyledTable';
import CustomButton from '../form/CustomButton';
import CustomPagination from '../form/CustomPagination';

export default function StudentTable(props) {
    const { students, page, handlePageChange, isLoading } = props;
    const totalPage = students ? students.total_pages : 0;
    const perPage = students ? students.per_page : 0;
    const count = students ? students.count : 0;
    const hasStudents = students && students.results && !!students.results.length;
    const history = useHistory();

    return (
        <>
            {isLoading ? (
                <Box sx={{ display: 'flex', margin: '18px', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : hasStudents ? (
                <TableContainer sx={{ mt: 3 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                
                                <StyledTableCell align="center">Student ID</StyledTableCell>
                                <StyledTableCell align="center">Name</StyledTableCell>
                                <StyledTableCell align="center">Course</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                                <StyledTableCell align="center">Explanation Status</StyledTableCell>
                                <StyledTableCell align="center">Revature</StyledTableCell>
                                <StyledTableCell align="center">Genspark</StyledTableCell>
                                <StyledTableCell align="center">SmoothStack</StyledTableCell>
                                <StyledTableCell align="center">Relocation</StyledTableCell>
                                <StyledTableCell align="center">Partner</StyledTableCell>
                                <StyledTableCell align="center">Degree</StyledTableCell>
                                <StyledTableCell align="center">Created</StyledTableCell>
                                <StyledTableCell align="center">Last Updated By</StyledTableCell>
                                <StyledTableCell align="center">Edit</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students &&
                                students.results.map((student, index) => (
                                    <StyledTableRow key={student.id}>
                                        
                                        <StyledTableCell align="center">{student.student_id}</StyledTableCell>
                                        <StyledTableCell
                                        sx={{cursor:"pointer",
                                         color:"blue"}}
                                        align="center"
                                        onClick={() =>
                                            history.push(`/students/edit/${student.id}`, {
                                                id: student.id
                                            })
                                        }>{student.name}
                                    </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getValueOption(studentsCourseOptions, student.course)}
                                        </StyledTableCell>
                                        <StyledTableCell
                                            align="center"
                                            style={{
                                                color: getStatusColor(studentsStatusColorOptions, student.status)
                                            }}
                                        >
                                            {getValueOption(studentsStatusOptions, student.status)}
                                        </StyledTableCell>

                                        <StyledTableCell align="center">
                                            {getValueOption(
                                                explanationStatusOptions,
                                                student.partner_application_explanation_status
                                            )}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getValueOption(partnercompanyOptions, student.revature)}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getValueOption(partnercompanyOptions, student.genspark)}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getValueOption(partnercompanyOptions, student.smoothstack)}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getValueOption(relocationOptions, student.relocation)}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getValueOption(partnerStatusOptions, student.partner)}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getValueOption(degreeOptions, student.degree)}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {getDateFormat({ date: student.created_at })}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            {student.updated_by && student.updated_by.user_name}
                                            <br />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <CustomButton
                                                onClick={() =>
                                                    history.push(`/partner_applications/edit/${student.id}`, {
                                                        id: student.id
                                                    })
                                                }
                                                text="Edit"
                                                variant="outlined"
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                    <CustomPagination
                        page={page}
                        handlePageChange={handlePageChange}
                        totalPage={totalPage}
                        count={count}
                        perPage={perPage}
                    />
                </TableContainer>
            ) : (
                <h3>NO DATA</h3>
            )}
        </>
    );
}
