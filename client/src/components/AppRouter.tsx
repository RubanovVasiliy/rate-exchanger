import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {useTypedSelector} from '../hooks/useTypedSelector';
import Exchange from '../pages/Exchange';
import Login from '../pages/Login';
import {privateRoutes, publicRoutes, RouteNames} from '../router';

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route => {
                    return <Route key={route.path} path={route.path} element={<Exchange/>}/>
                })}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.EXCHANGE} replace/>}
                />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => {
                    return <Route key={route.path} path={route.path} element={<Login/>}/>
                })}
                <Route
                    path="*"
                    element={<Navigate to={RouteNames.LOGIN} replace/>}
                />
            </Routes>
    );
};

export default AppRouter;