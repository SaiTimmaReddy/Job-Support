import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import { LOGIN_USER_TOKEN } from './axios';
import { PrivateRoute } from './components/routes/PrivateRoute';
import { PublicRoute } from './components/routes/PublicRoute';
import StudentStatusHistory from '../src/components/students/StudentStatusHistory';
import ApplicationAddUpdate from './containers/Application/AddUpdate';
import ApplicationList from './containers/Application/List';
import Home from './containers/Home';
import InterviewAddUpdate from './containers/Interview/AddUpdate';
import InterviewList from './containers/Interview/List';
import Login from './containers/Login';
import { checkLoginAction } from './reducks/users/actions';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import AuthRequest from './requests/auth-request';
import Admins from './containers/Admins/List';
import Add from './containers/Admins/AddUpdate';
import StudentList from './containers/Students/List';
import StudentAddUpdate from './containers/Students/AddUpdate';
import PartnerapplicationList from './containers/PartnerApplication/List';
import PartnerapplicationListAddUpdate from './containers/PartnerApplication/AddUpdate';

const Router = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem(LOGIN_USER_TOKEN);
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        if (token) {
            AuthRequest.checkLogin().then(response => {
                dispatch(checkLoginAction(response));
            });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Switch>
            <PublicRoute token={token} component={Login} path={'/login'} exact />
            <PrivateRoute token={token} component={Home} path={'/'} exact />
            <PrivateRoute token={token} component={ApplicationList} path={'/applications'} exact />
            <PrivateRoute token={token} component={ApplicationAddUpdate} path={'/applications/:action/:id?'} exact />
            <PrivateRoute token={token} component={InterviewList} path={'/interviews'} exact />
            <PrivateRoute token={token} component={InterviewAddUpdate} path={'/interviews/:action/:id?'} exact />
            <PrivateRoute token={token} component={Admins} path={'/admins'} exact />
            <PrivateRoute token={token} component={Add} path={'/admins/:action/:id?'} exact />
            <PrivateRoute token={token} component={StudentList} path={'/students'} exact />
            <PrivateRoute token={token} component={StudentAddUpdate} path={'/students/:action/:id?'} exact />
            <PrivateRoute token={token} component={PartnerapplicationList} path={'/partner_applications'} exact />
            <PrivateRoute token={token} component={StudentStatusHistory} path={'/history/:id?'} exact />
            <PrivateRoute
                token={token}
                component={PartnerapplicationListAddUpdate}
                path={'/partner_applications/:action/:id?'}
                exact
            />
        </Switch>
    );
};
export default Router;
