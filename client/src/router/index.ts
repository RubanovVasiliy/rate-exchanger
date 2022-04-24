import React from 'react'
import Exchange from '../pages/Exchange'
import Login from '../pages/Login'


export interface IRoute {
    path: string;
    compoment: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EXCHANGE = '/',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, compoment: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EXCHANGE, exact: true, compoment: Exchange}

]