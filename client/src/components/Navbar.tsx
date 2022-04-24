import {Layout, Menu, Row} from 'antd';
import {useNavigate} from 'react-router-dom'
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {RouteNames} from '../router';


const Navbar = () => {
    const navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.auth)
    const {user} = useTypedSelector(state => state.auth)

    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    {isAuth ?
                        <>
                            <div style={{color: 'white'}}>{user.username}</div>
                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >Logout</Menu.Item>
                        </>
                        :
                        <>
                            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>Login</Menu.Item>
                        </>
                    }
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;

