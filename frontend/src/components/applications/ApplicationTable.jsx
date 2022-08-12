import { Box, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useHistory } from 'react-router';
import { appliedByOptions, jobPortalOptions, statusOptions, statusColorOptions } from '../../constants';
import { getDateFormat, getStatusColor, getValueOption, truncateString } from '../../utils/common';
import { StyledTableCell, StyledTableRow } from '../common/StyledTable';
import CustomButton from '../form/CustomButton';
import CustomPagination from '../form/CustomPagination';

export default function ApplicationTable(props) {
    const history = useHistory();
    const { applications, page, handlePageChange, isLoading } = props;
    const totalPage = applications ? applications.total_pages : 0;
    const count = applications ? applications.count : 0;
    const perPage = applications ? applications.per_page : 0;
    const hasApplications = applications && applications.results && !!applications.results.length;

    return (
        <>
            {isLoading ? (
                <Box sx={{ display: 'flex', margin: '18px', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : hasApplications ? (
                <TableContainer sx={{ mt: 3 }} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>No.</StyledTableCell>
                                <StyledTableCell align="center">Student</StyledTableCell>
                                <StyledTableCell align="center">Applied Admin</StyledTableCell>
                                <StyledTableCell align="center">Applied By</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                                <StyledTableCell align="center">Company Name</StyledTableCell>
                                <StyledTableCell align="center">Position</StyledTableCell>
                                <StyledTableCell align="center">Job Post URL</StyledTableCell>
                                <StyledTableCell align="center">State</StyledTableCell>
                                <StyledTableCell align="center">Job Portal</StyledTableCell>
                                <StyledTableCell align="center">Created At</StyledTableCell>
                                <StyledTableCell align="center">Last Updated By</StyledTableCell>
                                <StyledTableCell align="center">Created By</StyledTableCell>
                                <StyledTableCell align="center">Add Interview</StyledTableCell>
                                <StyledTableCell align="center">Edit Application</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {applications.results.map(application => (
                                <StyledTableRow key={application.id}>
                                    <StyledTableCell
                                        sx="cursor:pointer"
                                        onClick={() =>
                                            history.push(`/applications/edit/${application.id}`, {
                                                id: application.id
                                            })
                                        }
                                    >
                                        {application.id}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{application.student.name}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {application.user ? application.user.user_name : ''}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {getValueOption(appliedByOptions, application.applied_by)}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center"
                                        style={{ color: getStatusColor(statusColorOptions, application.status) }}
                                    >
                                        {getValueOption(statusOptions, application.status)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{application.company_name}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {truncateString(application.position, 20)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <a href={application.job_post_url} rel="noreferrer" target="_blank">
                                            {truncateString(application.job_post_url, 20)}
                                        </a>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{application.state}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {getValueOption(jobPortalOptions, application.job_portal)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {getDateFormat({ date: application.created_at })}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {application.updated_by && application.updated_by.user_name}
                                        <br />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        {application.created_by && application.created_by.user_name}
                                        <br />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <CustomButton
                                            onClick={() =>
                                                history.push({
                                                    pathname: `/interviews/add/`,
                                                    state: {
                                                        application: {
                                                            key: application.id,
                                                            value: `${application.id} - ${application.company_name} | ${application.position}`
                                                        },
                                                        student: {
                                                            key: application.student.id,
                                                            value: `${application.student.name}`
                                                        }
                                                    }
                                                })
                                            }
                                            text="Add"
                                            variant="outlined"
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="center">
                                        <CustomButton
                                            onClick={() =>
                                                history.push(`/applications/edit/${application.id}`, {
                                                    id: application.id
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
