import { Card, Space } from 'antd';
import { FC, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import CurrencyForm from './CurrencyForm';


const Exchanger: FC = () => {
    const {rate} = useTypedSelector(store=>store.rate)

    useEffect(() => {

      }, []);
    
    return (
            <Space size={50} wrap={true} >        
                <Card className='exchanger-layout'>
                    <CurrencyForm
                        rate={rate}
                    />
                </Card>
                <Card className='exchanger-layout'>
                    <CurrencyForm
                        rate={rate}
                    />
                </Card>
            </Space>
    )
}


export default Exchanger;
