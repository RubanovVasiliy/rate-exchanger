import { InputNumber, Select, Space } from 'antd';
import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

interface CurrencyFormPorop {
    onChangeCurrency: (e: string)=>void;
    onChangeValue: (e: number)=>void;
    currency: string;
    value: number;
}

const CurrencyForm: FC<CurrencyFormPorop> = ({onChangeCurrency,onChangeValue,currency,value }: CurrencyFormPorop) => {
    const {rate} = useTypedSelector(state => state.rate)
    const { Option } = Select;
    return (
        <Space direction='vertical'>
           <Select
                showSearch
                placeholder="Select a currency"
                optionFilterProp="children"
                onChange={(e:string) => onChangeCurrency(e)}
                className='w200px'
                value={currency}
            >
                {rate.currencies?.map(curr => <Option key={curr.charCode} value={curr.charCode}>{curr.charCode}</Option>)}
            </Select>
                <InputNumber 
                    min={0} 
                    defaultValue={1} 
                    value={value} 
                    onChange={(e:number) => onChangeValue(e)}
                    className='w200px'
                    />
        </Space>
    )
}

export default CurrencyForm;