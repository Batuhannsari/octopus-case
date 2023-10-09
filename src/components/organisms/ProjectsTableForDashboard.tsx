import { useDummyDataContext } from '@/context/DummyDataContext';
import { User } from '@/ınterfaces/UsersTypes';
import { Typography, Table, Tag, Progress, Avatar, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { ReactNode, useEffect } from 'react'
import AuthorCard from '../atoms/AuthorCard';
import FunctionCard from '../atoms/FunctionCard';
import dayjs from 'dayjs';
import Image from 'next/image';
import { AntDesignOutlined, MoreOutlined, UserOutlined } from '@ant-design/icons';

interface Iprops {
}
export type ProjectType = {
    image: ReactNode,
    title: string,
    budget: string,
    status: string,
    completion: number
}

const ProjectsTableForDashboard: React.FC<Iprops> = (props) => {

    const { users, getUsers } = useDummyDataContext()

    const projects = [
        {
            image: <Image width={20} height={20} alt='' src={'/XD.svg'} />,
            title: "Chakra Soft UI Version",
            budget: "$14,000",
            status: "Working",
            completion: 60,
            id: 1,
        },
        {
            image: <Image width={20} height={20} alt='' src={'/Atlassian.svg'} />,
            title: "Add Progress Track",
            budget: "$3,000",
            status: "Canceled",
            completion: 10,
            id: 2
        },
        {
            image: <Image width={20} height={20} alt='' src={'/Slack.svg'} />,
            title: "Fix Platform Errors",
            budget: "",
            status: "Done",
            completion: 100,
            id: 3
        },
        {
            image: <Image width={20} height={20} alt='' src={'/Spotify.svg'} />,
            title: "Launch our Mobile App",
            budget: "$32,000",
            status: "Done",
            completion: 100,
            id: 4
        },
        {
            image: <Image width={20} height={20} alt='' src={'/Jira.svg'} />,
            title: "Add the New Pricing Page",
            budget: "",
            status: "Working",
            completion: 25,
            id: 5
        },
    ]


    const columns: ColumnsType<ProjectType> = [

        {
            title: 'COMPANIES',
            width: 220,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            render: (a, data, index) =>
                <div className='flex flex-row align-middle gap-4'>
                    <div>{data.image}</div>
                    <Typography className='font-bold'>{data.title}</Typography>
                </div>
        },
        {
            title: 'MEMBERS',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data: ProjectType) =>
                <Avatar.Group size={'small'}>
                    {
                        users.splice(0, 5).map((v, i) => (
                            <Avatar key={i} style={{ backgroundColor: '#e5e5e5' }} src={v.image} />
                        ))
                    }
                </Avatar.Group>
        },
        {
            title: 'BUDGET',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data) => <Typography className='font-bold'>{data.budget || "Not set"}</Typography>
        },
        {
            title: 'COMPLETION',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data: ProjectType) =>
                <div className='flex flex-col'>
                    <Typography className='font-bold text-[var(--green)]'>{data?.completion || 0}%</Typography>
                    <Progress size={'small'} showInfo={false} strokeColor={"var(--green)"} percent={data?.completion || 0} />
                </div>
        },
    ];

    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className=''>
            <Typography className='font-bold text-lg'>Projects</Typography>
            <div className='flex flex-row gap-1 mb-2'>
                <Image width={15} height={15} alt='' src={"/Icons/agreeGreen.svg"} />
                <Typography className='text-[var(--text-color-soft)] font-bold '>30 done</Typography>
                <Typography className='text-[var(--text-color-soft)] '>this month</Typography>
            </div>
            <Table rowKey={({ id }) => id} pagination={false} columns={columns} dataSource={projects} scroll={{ x: 800 }} />
        </div>
    )
}

export default ProjectsTableForDashboard