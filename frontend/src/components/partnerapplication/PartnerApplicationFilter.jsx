import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Stack } from '@mui/material';
import React, { useContext } from 'react';
import {
    studentsCourseOptions,
    explanationStatusOptions,
    partnercompanyOptions,
    relocationOptions,
    partnerStatusOptions,
    degreeOptions
} from '../../constants';
import { FormContext } from '../../contexts/FormContext';
import CustomButton from '../form/CustomButton';
import CustomLoadingButton from '../form/CustomLoadingButton';
import CustomSelect from '../form/CustomSelect';
import CustomTextField from '../form/CustomTextField';

const ApplicationFilter = () => {
    const { clearSearch, onChangeHandler, queries, submitSearch, isLoading, onDeleteHandler } = useContext(FormContext);

    return (
        <Paper component="form" sx={{ p: 4, width: '100%' }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <CustomTextField name="name" label="Name" value={queries.name} onChange={onChangeHandler} />
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect
                        name="course"
                        label="Course"
                        selectedValue={queries.course}
                        options={studentsCourseOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={3}>
                    <CustomSelect
                        name="partner_application_explanation_status"
                        label="Explanation Status"
                        selectedValue={queries.partner_application_explanation_status}
                        options={explanationStatusOptions}
                        onChange={onChangeHandler}
                        onDelete={onDeleteHandler}
                    />
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect
                        name="revature"
                        label="Revature"
                        selectedValue={queries.revature}
                        options={partnercompanyOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect
                        name="genspark"
                        label="Genspark"
                        selectedValue={queries.genspark}
                        options={partnercompanyOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect
                        name="smoothstack"
                        label="SmoothStack"
                        selectedValue={queries.smoothstack}
                        options={partnercompanyOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect
                        name="relocation"
                        label="Relocation"
                        selectedValue={queries.relocation}
                        options={relocationOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect
                        name="partner"
                        label="Partner"
                        selectedValue={queries.partner}
                        options={partnerStatusOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
                <Grid item xs={2}>
                    <CustomSelect
                        name="degree"
                        label="Degree"
                        selectedValue={queries.degree}
                        options={degreeOptions}
                        onChange={onChangeHandler}
                    />
                </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }}>
                <Stack spacing={2} direction="row">
                    <CustomLoadingButton
                        onClick={submitSearch}
                        loading={isLoading}
                        startIcon={<SearchIcon />}
                        variant="contained"
                        text="Search"
                    ></CustomLoadingButton>
                    <CustomButton onClick={clearSearch} text="Clear" variant="outlined" />
                </Stack>
            </Grid>
        </Paper>
    );
};

export default ApplicationFilter;
