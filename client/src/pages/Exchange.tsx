import { Col, Divider, Layout, Row, Space, Spin } from 'antd';
import {FC, useEffect} from 'react';
import CurrenciesTable from '../components/CurrenciesTable';
import Exchanger from '../components/Exchanger';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Exchange: FC = () => {
    const {load} = useActions()
    const {isLoading} = useTypedSelector(store=>store.rate)

    useEffect(() => {
        load()
    },[])

    return (
        <Row justify='center' align='top' className='h100'>
            <Col >
                 {isLoading ? 
                    <Layout>
                        <Space size='middle' className='spin'>
                            <Spin />
                        </Space>
                    </Layout>
                    :
                    <Layout className='mt20'>
                        <Space direction='vertical' size='large'>
                            <Layout>
                                <Exchanger/>
                            </Layout>    
                            <Layout>
                                <CurrenciesTable/>
                            </Layout>                
                        </Space>
                    </Layout>
                }
            </Col>
        </Row>
    );
};

export default Exchange;