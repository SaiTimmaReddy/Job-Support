import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import CustomButton from '../../components/form/CustomButton';
import CustomLoadingButton from '../../components/form/CustomLoadingButton';
import CustomSearchSelect from '../../components/form/CustomSearchSelect';
import CustomSelect from '../../components/form/CustomSelect';
import CustomTextArea from '../../components/form/CustomTextArea';
import CustomTextField from '../../components/form/CustomTextField';
import { appliedByOptions, jobPortalOptions, statusOptions } from '../../constants';
import applicationRequest from '../../requests/application-request';
import studentRequest from '../../requests/student-request';
import userRequest from '../../requests/user-request';

const AddUpdate = () => {
    const history = useHistory();
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(!!id);

    const [studentOptions, setStudentOptions] = useState([]);
    const [userOptions, setUserOptions] = useState([]);

    const [application, setApplication] = useState({
        student: { key: '', value: '' },
        status: '',
        user: { key: '', value: '' },
        applied_by: '',
        company_name: '',
        position: '',
        job_portal: '',
        state: '',
        job_post_url: '',
        job_description: '',
        note: ''
    });

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (id) {
            applicationRequest.find(id).then(res => {
                setApplication({
                    ...res,
                    student: res.student ? { key: res.student.id, value: res.student.name } : null,
                    user: res.user ? { key: res.user.id, value: res.user.user_name } : null
                });
                setIsLoading(false);

                let studentOpt = res.student
                    ? [
                          {
                              key: res.student.id,
                              value: res.student.name
                          }
                      ]
                    : [];
                setStudentOptions(studentOpt);

                let userOpt = res.user
                    ? [
                          {
                              key: res.user.id,
                              value: res.user.user_name
                          }
                      ]
                    : [];
                setUserOptions(userOpt);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnchange = e => {
        const { name, value } = e.target;
        setApplication(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onChangeSearchSelect = (value, name) => {
        setApplication(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const getStudents = async filter => {
        studentRequest.index(filter).then(res => {
            let newOptions = res.results.length
                ? res.results.map(option => {
                      return {
                          key: option.id,
                          value: option.name
                      };
                  })
                : [];
            setStudentOptions(newOptions);
        });
    };

    const getUsers = async filter => {
        userRequest.index(filter).then(res => {
            let newOptions = res.results.length
                ? res.results.map(option => {
                      return {
                          key: option.id,
                          value: option.user_name
                      };
                  })
                : [];
            setUserOptions(newOptions);
        });
    };

    const onSubmit = () => {
        setIsLoading(true);
        if (id) {
            applicationRequest
                .update(id, {
                    ...application,
                    student: application.student.key,
                    user: application.user.key
                })
                .then(() => history.goBack())
                .catch(err => {
                    setErrors(err.response.data);
                    setIsLoading(false);
                });
        } else {
            applicationRequest
                .store({
                    ...application,
                    student: application.student.key,
                    user: application.user.key
                })
                .then(res => history.goBack())
                .catch(err => {
                    setErrors(err.response.data);
                    setIsLoading(false);
                });
        }
    };

    return (
        <>
            <Typography variant="h5" gutterBottom component="div" my={2}>
                {id ? 'Update' : 'Add'} an application
            </Typography>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={3}>
                    <CustomSearchSelect
                        label="Student"
                        name="student"
                        error={!!errors.student}
                        helperText={errors.student}
                        availableOptions={studentOptions}
                        selectedValue={application.student}
                        onChange={onChangeSearchSelect}
                        onTextChange={e => getStudents({ name: e && e.target.value })}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Status"
                        name="status"
                        error={!!errors.status}
                        helperText={errors.status}
                        selectedValue={application.status}
                        onChange={handleOnchange}
                        options={statusOptions}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSearchSelect
                        label="Applied Admin"
                        name="user"
                        error={!!errors.user}
                        helperText={errors.user}
                        availableOptions={userOptions}
                        selectedValue={application.user}
                        onChange={onChangeSearchSelect}
                        onTextChange={e => getUsers({ name: e && e.target.value })}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        label="Applied By"
                        name="applied_by"
                        error={!!errors.applied_by}
                        helperText={errors.applied_by}
                        selectedValue={application.applied_by}
                        onChange={handleOnchange}
                        options={appliedByOptions}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                    <CustomTextField
                        name="company_name"
                        error={!!errors.company_name}
                        helperText={errors.company_name}
                        value={application.company_name}
                        onChange={handleOnchange}
                        label="Company Name"
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomTextField
                        name="position"
                        error={!!errors.position}
                        helperText={errors.position}
                        value={application.position}
                        onChange={handleOnchange}
                        label="Position"
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        name="job_portal"
                        label="Job Portal"
                        error={!!errors.job_portal}
                        helperText={errors.job_portal}
                        selectedValue={application.job_portal}
                        onChange={handleOnchange}
                        options={jobPortalOptions}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                    <CustomTextField
                        name="state"
                        label="City/State"
                        value={application.state}
                        onChange={handleOnchange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CustomTextField
                        name="job_post_url"
                        error={!!errors.job_post_url}
                        helperText={errors.job_post_url}
                        label="Job Description URL"
                        value={application.job_post_url}
                        onChange={handleOnchange}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={6}>
                    <CustomTextArea
                        name="job_description"
                        error={!!errors.job_description}
                        helperText={errors.job_description}
                        value={application.job_description}
                        placeholder="Job Description"
                        onChange={handleOnchange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CustomTextArea
                        name="note"
                        error={!!errors.note}
                        helperText={errors.note}
                        value={application.note}
                        placeholder="Note"
                        onChange={handleOnchange}
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
