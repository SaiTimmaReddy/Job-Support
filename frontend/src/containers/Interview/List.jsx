import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import InterviewFilter from '../../components/interviews/InterviewFilter';
import InterviewTable from '../../components/interviews/InterviewTable';
import { FormContext } from '../../contexts/FormContext';
import InterviewRequest from '../../requests/interview-request';
import { useQuery } from '../../hooks/useQuery';
import querystring from 'query-string';
import { interviewStatusOptions, interviewTypeOptions } from '../../constants';
import { getDateFormat } from '../../utils/common';


const List = () => {
    const history = useHistory();
    const searchQuery = useQuery();
    const [interviews, setInterviews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const status = searchQuery.get('status');
    const interview_type = searchQuery.get('interview_type');
    const [queries, setQueries] = useState({
        status: status ? interviewStatusOptions.filter(s=> status.split(',').includes(s.key)) : [],
        interview_type: interview_type ? interviewTypeOptions.filter(s=> interview_type.split(',').includes(s.key)) : [],
        round: searchQuery.get('round') || '',
        support_tutor: searchQuery.get('support_tutor') || '',
        company_name: searchQuery.get('company_name') || '',
        start_date: searchQuery.get('start_date') || null,
        end_date: searchQuery.get('end_date') || null,
    });
    const [querySelect, setQuerySelect] = useState({
        student: JSON.parse(searchQuery.get('student')) || { value: '', keys: '' },
        application: JSON.parse(searchQuery.get('application')) || { value: '', key: '' }
    });
    
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,
            status: queries.status.length > 0 ? queries.status.map(s=> s.key).join(',') : '',

            interview_type: queries.interview_type.length > 0 ? queries.interview_type.map(s=> s.key).join(',') : '',

            page
        };
        history.replace({
            pathname: 'interviews',
            search: querystring.stringify(
                {
                    ...queriesObject,
                    student: querySelect.student.key ? JSON.stringify(querySelect.student) : '',
                    application: querySelect.application.key ? JSON.stringify(querySelect.application) : ''
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
        const interview_type =
            name === 'interview_type' ? (typeof value === 'string' ? value.split(',') : value) : queries.interview_type;

        setQueries({
            ...queries,
            [name]: value,
            status,
            interview_type
        });
    };

    const onDeleteHandler = (e, item) => {
        setQueries({
            ...queries, 
            status: queries.status.filter(s => s.key !== item.key ),
            interview_type: queries.interview_type.filter(s => s.key !== item.key )

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

        InterviewRequest.index({
            ...queriesObject,
            student: querySelect.student.key,
            application: querySelect.application.key
        }).then(response => {
            setInterviews(response);
            setIsLoading(false);
        });
    };

    const clearSearch = () => {
        setIsLoading(true);
        setPage(1);
        InterviewRequest.index({ page }).then(response => {
            setInterviews(response);
            setIsLoading(false);
        });
        setQueries({
            status: [],
            interview_type: [],
            round: '',
            support_tutor: '',
            company_name: '',
            start_date: null,
            end_date: null,
        });
        setQuerySelect({ student: { value: '', key: '' }, application: { value: '', key: '' } });
        history.replace('/interviews');
    };

    useEffect(() => {
        let isSubscribed = true;
        InterviewRequest.index({
            ...queries,
            status: queries.status.length > 0 ? queries.status.map(s => s.key).join(',') : '',
            student: querySelect.student.key,
            application: querySelect.application.key,
            interview_type: queries.interview_type.length > 0 ? queries.interview_type.map(s => s.key).join(',') : '',
            page
        }).then(response => {
            if (isSubscribed) {
                setInterviews(response);
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
                    onChangeDate,
                    onChangeHandler,
                    onChangeSearchSelect,
                    queries,
                    onDeleteHandler,
                    querySelect,
                    submitSearch
                }}
            >
                <InterviewFilter />
            </FormContext.Provider>
            <InterviewTable
                isLoading={isLoading}
                interviews={interviews}
                showPagination={true}
                showEdit={true}
                page={page}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default List;
