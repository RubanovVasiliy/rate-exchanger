import { Table } from 'antd';
import { useTypedSelector } from '../hooks/useTypedSelector';

const columns = [
  {
    title: 'Название валюты',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Курс',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Код валюты',
    dataIndex: 'charCode',
    key: 'charCode',
  },
];

export default function CurrenciesTable() {
const {rate} = useTypedSelector(store=>store.rate)

  return (
    <Table 
        columns={columns} 
        dataSource={rate.currencies} 
        pagination={{position:['topCenter']}}
    />
  )
}
