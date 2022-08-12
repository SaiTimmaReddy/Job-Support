import { Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import CustomButton from '../../components/form/CustomButton';
import CustomLoadingButton from '../../components/form/CustomLoadingButton';
import CustomSelect from '../../components/form/CustomSelect';
import CustomTextField from '../../components/form/CustomTextField';

import {
    studentsCourseOptions,
    studentsStatusOptions,
    partnerStatusOptions,
    explanationStatusOptions,
    partnercompanyOptions,
    relocationOptions,
    degreeOptions
} from '../../constants';
import studentRequest from '../../requests/student-request';

const AddUpdate = () => {
    const history = useHistory();
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(!!id);
    const [student, setStudent] = useState({
        name: '',
        student_id: '',
        status: '',
        partner: '',
        course: '',
        partner_application_explanation_status: '',
        revature: '',
        genspark: '',
        smoothstack: '',
        relocation: '',
        created_at: '',
        degree: '',
        partner_application_note: ''
    });

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            studentRequest.find(id).then(res => {
                setIsLoading(true);
                setStudent(res);
                setIsLoading(false);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnchange = e => {
        const { name, value } = e.target;
        setStudent(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = () => {
        setIsLoading(true);
        if (id) {
            studentRequest
                .update(id, student)
                .then(() => history.goBack())
                .catch(err => {
                    setErrors(err.response.data);
                    setIsLoading(false);
                });
        } else {
            studentRequest
                .store(student)
                .then(() => history.goBack())
                .catch(err => {
                    setErrors(err.response.data);
                    setIsLoading(false);
                });
        }
    };

    return (
        <>
            <Typography variant="h5" gutterBottom component="div" my={2}>
                {id ? 'Partner' : 'Add'} Application
            </Typography>
            <Typography gutterBottom component="p" my={2}>
                Basic Info
            </Typography>
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={3}>
                    <CustomTextField
                        name="name"
                        error={!!errors.name}
                        helperText={errors.name}
                        value={student.name}
                        onChange={handleOnchange}
                        label="Name"
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomTextField
                        name="student_id"
                        error={!!errors.student_id}
                        helperText={errors.student_id}
                        value={student.student_id}
                        onChange={handleOnchange}
                        label="Student ID"
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Course"
                        name="course"
                        error={!!errors.course}
                        helperText={errors.course}
                        selectedValue={student.course}
                        onChange={handleOnchange}
                        options={studentsCourseOptions}
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Status"
                        name="status"
                        error={!!errors.status}
                        helperText={errors.status}
                        selectedValue={student.status}
                        onChange={handleOnchange}
                        options={studentsStatusOptions}
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Explanation Status"
                        name="partner_application_explanation_status"
                        error={!!errors.partner_application_explanation_status}
                        helperText={errors.partner_application_explanation_status}
                        selectedValue={student.partner_application_explanation_status}
                        onChange={handleOnchange}
                        options={explanationStatusOptions}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Revature"
                        name="revature"
                        error={!!errors.revature}
                        helperText={errors.revature}
                        selectedValue={student.revature}
                        onChange={handleOnchange}
                        options={partnercompanyOptions}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Genspark"
                        name="genspark"
                        error={!!errors.genspark}
                        helperText={errors.genspark}
                        selectedValue={student.genspark}
                        onChange={handleOnchange}
                        options={partnercompanyOptions}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="SmoothStack"
                        name="smoothstack"
                        error={!!errors.smoothstack}
                        helperText={errors.smoothstack}
                        selectedValue={student.smoothstack}
                        onChange={handleOnchange}
                        options={partnercompanyOptions}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Relocation"
                        name="relocation"
                        error={!!errors.relocation}
                        helperText={errors.relocation}
                        selectedValue={student.relocation}
                        onChange={handleOnchange}
                        options={relocationOptions}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Partner"
                        name="partner"
                        error={!!errors.partner}
                        helperText={errors.partner}
                        selectedValue={student.partner}
                        onChange={handleOnchange}
                        options={partnerStatusOptions}
                        disabled={true}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Degree"
                        name="degree"
                        error={!!errors.degree}
                        helperText={errors.degree}
                        selectedValue={student.degree}
                        onChange={handleOnchange}
                        options={degreeOptions}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomTextField
                        name="student_created_at"
                        error={!!errors.created_at}
                        helperText={errors.created_at}
                        value={Date(student.created_at)}
                        onChange={handleOnchange}
                        label="Student Created At"
                        disabled={true}
                    />
                </Grid>
            </Grid>
            <Stack spacing={2} direction="row">
                <CustomLoadingButton
                    onClick={onSubmit}
                    loading={isLoading}
                    variant="contained"
                    text={id ? 'Update' : 'Add'}
                ></CustomLoadingButton>
                <CustomButton text="Cancel" variant="outlined" onClick={() => history.goBack()} />
            </Stack>
        </>
    );
};

export default AddUpdate;
