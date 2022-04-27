import { Card, Space } from 'antd';
import { FC } from 'react'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CurrencyForm from './CurrencyForm';

const Exchanger: FC = () => {
    const {exchanger} = useTypedSelector(state => state.rate)
    const {onChangeValue, onChangeCurrency} = useActions()

    const onChangeCurrencyIn = (e:string) => {
        onChangeCurrency('currencyIn',e)
    }

    const onChangeValueIn = (e:number) => {
        onChangeValue('valueIn',e)
    }

    const onChangeCurrencyOut = (e:string) => {
        onChangeCurrency('currencyOut',e)
    }

    const onChangeValueOut = (e:number) => {
        onChangeValue('valueOut',e)
    }

    return (
        <Space size={50} wrap={true} >        
            <Card className='exchanger-layout'>
               <CurrencyForm
                    onChangeCurrency={onChangeCurrencyIn}
                    onChangeValue={onChangeValueIn}
                    currency={exchanger.currencyIn}
                    value={exchanger.valueIn}
               />
            </Card>
            <Card className='exchanger-layout'>
                <CurrencyForm
                    onChangeCurrency={onChangeCurrencyOut}
                    onChangeValue={onChangeValueOut}
                    currency={exchanger.currencyOut}
                    value={exchanger.valueOut}
                />
            </Card>
        </Space>
    )
}


export default Exchanger;
