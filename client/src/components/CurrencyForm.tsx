import { InputNumber, Select, Space } from 'antd';
import { FC } from 'react'
import { IRate } from '../models/IRate';

interface CurrencyFormPorop {
    rate : IRate;
}

function onChange(value:string) {
    console.log(`selected ${value}`);
  }

  function onChangeInput(value:number) {
    console.log(`selected ${value}`);
  }

const CurrencyForm: FC<CurrencyFormPorop> = ({rate }: CurrencyFormPorop) => {
    const { Option } = Select;
    return (
        <Space direction='vertical'>
            <Select
                showSearch
                placeholder="Select a currency"
                optionFilterProp="children"
                onChange={onChange}
                style={{width:'200px'}}
            >
                {rate.currencies?.map(curr => <Option key={curr.charCode} value={curr.charCode}>{curr.charCode}</Option>)}
            </Select>
                <InputNumber min={1} defaultValue={1} onChange={onChangeInput} style={{width:'200px'}}  />
        </Space>
    )
}


export default CurrencyForm;