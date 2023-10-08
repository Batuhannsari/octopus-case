import { useDummyDataContext } from '@/context/DummyDataContext';
import { User } from '@/ınterfaces/UsersTypes';
import { Typography, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import AuthorCard from '../atoms/AuthorCard';
import FunctionCard from '../atoms/FunctionCard';
import dayjs from 'dayjs';

interface Iprops {
}

const AuthorsTable: React.FC<Iprops> = (props) => {

    const { users, getUsers } = useDummyDataContext()


    const columns: ColumnsType<User> = [

        {
            title: 'AUTHOR',
            width: 350,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            render: (a, data, index) => <AuthorCard data={data} />
        },
        {
            title: 'FUNCTION',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data, index) => <FunctionCard data={data} />
        },
        {
            title: 'STATUS',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data: User, index) => {
                const isActive = data.age > 30
                return (
                    <Tag color={isActive ? "#48BB78" : "#CBD5E0"}>{isActive ? "Online" : "Offline"}</Tag>
                )
            }
        },
        {
            title: 'EMPLOYED',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data: User, index) => <Typography className='font-bold'>{dayjs(data.birthDate).format('DD/MM/YYYY') // display
            }</Typography>
        },
        {
            title: '',
            key: 'operation',
            fixed: 'right',
            align: "center",
            width: 100,
            render: () => <a>Edit</a>,
        },
    ];

    return (
        <div className='bg-white p-6 rounded-2xl'>
            <Typography className='font-bold text-lg mb-2'>Authors Table</Typography>
            <Table rowKey={({ id }) => id} pagination={false} columns={columns} dataSource={users.slice(0, 6)} scroll={{ x: 1300 }} />
        </div>
    )
}

export default AuthorsTable