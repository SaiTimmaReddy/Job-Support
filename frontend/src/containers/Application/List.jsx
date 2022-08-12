import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ApplicationFilter from '../../components/applications/ApplicationFilter';
import ApplicationTable from '../../components/applications/ApplicationTable';
import CustomButton from '../../components/form/CustomButton';
import { FormContext } from '../../contexts/FormContext';
import ApplicationRequest from '../../requests/application-request';
import { useQuery } from '../../hooks/useQuery';
import querystring from 'query-string';
import { statusOptions } from '../../constants';
import { getDateFormat } from '../../utils/common';

const List = () => {
    const history = useHistory();
    const searchQuery = useQuery();
    const [applications, setApplications] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const status = searchQuery.get('status');
    const [queries, setQueries] = useState({
        status: status ? statusOptions.filter(s=> status.split(',').includes(s.key)) : [],
        applied_by: searchQuery.get('applied_by') || '',
        company_name: searchQuery.get('company_name') || '',
        position: searchQuery.get('position') || '',
        job_description: searchQuery.get('job_description') || '',
        job_portal: searchQuery.get('job_portal') || '',
        start_date: searchQuery.get('start_date') || null,
        end_date: searchQuery.get('end_date') || null,
    });
    const [querySelect, setQuerySelect] = useState({
        student: JSON.parse(searchQuery.get('student')) || { value: '', keys: '' },
        user: JSON.parse(searchQuery.get('user')) || { value: '', keys: '' }
    });
    
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,
            status: queries.status.length > 0 ? queries.status.map(s=> s.key).join(',') : '',
            page
        };
        history.replace({
            pathname: 'applications',
            search: querystring.stringify(
                {
                    ...queriesObject,
                    student: querySelect.student.key ? JSON.stringify(querySelect.student) : '',
                    user: querySelect.user.key ? JSON.stringify(querySelect.user) : ''
                },
                { skipEmptyString: true, skipNull: true }
            )
        });
        return queriesObject;
    };

    const handlePageChange = (e, value) => {
        handleQueryString({ page: value });
        setPage(value);
    };

    const onChangeHandler = e => {
        const { value, name } = e.target;
        const status = name === 'status' ? (typeof value === 'string' ? value.split(',') : value) : queries.status;


        setQueries({
            ...queries,
            [name]: value,
            status
        });
    };


    const onDeleteHandler = (e, item) => {
        setQueries({
            ...queries, 
            status: queries.status.filter(s => s.key !== item.key )
        });
    };
    
    const onChangeSearchSelect = (value, name) => {
        setQuerySelect({
            ...querySelect,
            [name]: value
        });
    };

    const onChangeDate = (value, name) => {
        setQueries(prev => ({
            ...prev,
            [name]: getDateFormat({date: value, isDateTime: false})
        }));
    };

    const submitSearch = () => {
        setIsLoading(true);
        setPage(1);
        const queriesObject = handleQueryString({ page: 1 });
        ApplicationRequest.index({
            ...queriesObject,
            student: querySelect.student.key,
            user: querySelect.user.key
        }).then(response => {
            setApplications(response);
            setIsLoading(false);
        });
    };

    const clearSearch = () => {
        setIsLoading(true);
        setPage(1);
        ApplicationRequest.index({ page }).then(response => {
            setApplications(response);
            setIsLoading(false);
        });
        setQueries({
            status: [],
            applied_by: '',
            company_name: '',
            position: '',
            job_description: '',
            job_portal: '',
            start_date: null,
            end_date: null,
        });
        setQuerySelect({ student: { value: '', key: '' }, user: { value: '', key: '' } });
        history.replace('/applications');
    };

    useEffect(() => {
        let isSubscribed = true;
        ApplicationRequest.index({
            ...queries,
            status: queries.status.length > 0 ? queries.status.map(s => s.key).join(',') : '',
            user: querySelect.user.key,
            student: querySelect.student.key,
            page
        }).then(response => {
            if (isSubscribed) {
                setApplications(response);
                setIsLoading(false);
            }
        });
        return () => (isSubscribed = false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <>
            <FormContext.Provider
                value={{
                    clearSearch,
                    isLoading,
                    onChangeDate,
                    onChangeHandler,
                    onChangeSearchSelect,
                    onDeleteHandler,
                    queries,
                    querySelect,
                    submitSearch
                }}
            >
                <ApplicationFilter />
            </FormContext.Provider>

            <Grid container direction="row" justifyContent="flex-end" alignItems="center" mt={3}>
                <CustomButton
                    text="Add an Application"
                    variant="contained"
                    onClick={() => history.push('/applications/create')}
                />
            </Grid>
            <ApplicationTable
                isLoading={isLoading}
                applications={applications}
                page={page}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default List;
