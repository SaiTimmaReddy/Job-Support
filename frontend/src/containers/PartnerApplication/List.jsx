
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PartnerApplicationFilter from '../../components/partnerapplication/PartnerApplicationFilter';
import PartnerApplicationTable from '../../components/partnerapplication/PartnerApplicationTable';
import { FormContext } from '../../contexts/FormContext';
import StudentRequest from '../../requests/student-request';
import { useQuery } from '../../hooks/useQuery';
import querystring from 'query-string';
import { studentsStatusOptions } from '../../constants';

const List = () => {
    const history = useHistory();
    const searchQuery = useQuery();
    const [students, setStudents] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const status = searchQuery.get('status');
    const [queries, setQueries] = useState({
        application_questionnaire_status: searchQuery.get('application_questionnaire_status') || '',
        course: searchQuery.get('course') || '',
        student_id: searchQuery.get('student_id') || '',
        name: searchQuery.get('name') || '',
        partner: searchQuery.get('partner') || '',
        status: status ? studentsStatusOptions.filter(s => status.split(',').includes(s.key)) : [],
        partner_application_explanation_status: searchQuery.get('partner_application_explanation_status') || '',
        revature: searchQuery.get('revature') || '',
        genspark: searchQuery.get('genspark') || '',
        smoothstack: searchQuery.get('smoothstack') || '',
        relocation: searchQuery.get('relocation') || '',
        degree: searchQuery.get('degree') || '',
    });
    const [page, setPage] = useState(+searchQuery.get('page') || 1);

    const handleQueryString = ({ page = 1 }) => {
        const queriesObject = {
            ...queries,
            status: queries.status.length > 0 ? queries.status.map(s => s.key).join(',') : '',

            page
        };
        history.replace({
            pathname: 'partner_applications',
            search: querystring.stringify(queriesObject, { skipEmptyString: true, skipNull: true })
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
            status: queries.status.filter(s => s.key !== item.key)
        });
    };

    const submitSearch = () => {
        setIsLoading(true);
        setPage(1);
        const queriesObject = handleQueryString({ page: 1 });
        StudentRequest.index(queriesObject).then(response => {
            setStudents(response);
            setIsLoading(false);
        });
    };

    const clearSearch = () => {
        setIsLoading(true);
        setPage(1);
        StudentRequest.index({ page }).then(response => {
            setStudents(response);
            setIsLoading(false);
        });
        setQueries({
            course: '',
            student_id: '',
            name:  '',
            partner:  '',
            status: [],
            partner_application_explanation_status: '',
            revature: '',
            genspark: '',
            smoothstack: '',
            relocation: '',
            degree: '',
        });
        history.replace('/partner_applications');
    };

    useEffect(() => {
        let isSubscribed = true;
        StudentRequest.index({
            ...queries,
            status: queries.status.length > 0 ? queries.status.map(s => s.key).join(',') : '',
            page
        }).then(response => {
            if (isSubscribed) {
                setStudents(response);
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
                    onChangeHandler,
                    queries,
                    onDeleteHandler,
                    submitSearch
                }}
            >
                <PartnerApplicationFilter />
            </FormContext.Provider>

            <PartnerApplicationTable
                isLoading={isLoading}
                students={students}
                page={page}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default List;
