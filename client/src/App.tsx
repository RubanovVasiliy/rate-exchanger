import { Layout } from 'antd';
import  { useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import './App.css'
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

function App() {
const { setUser, setIsAuth } = useActions()
    useEffect(() => {
        if(localStorage.getItem('auth')){
            setUser({
                username: localStorage.getItem('username'||''),
                accessToken: localStorage.getItem('accessToken')
            } as IUser)
            setIsAuth(true)
        }
    })
    
    return (
        <Layout >
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
