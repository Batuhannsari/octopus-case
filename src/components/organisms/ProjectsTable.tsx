import { useDummyDataContext } from '@/context/DummyDataContext';
import { MoreOutlined } from '@ant-design/icons';
import { Progress, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface Iprops {
}
export type ProjectType = {
    image: ReactNode,
    title: string,
    budget: string,
    status: string,
    completion: number
}

const ProjectsTable: React.FC<Iprops> = (props) => {

    const { users, getUsers } = useDummyDataContext()


    const projects = [
        {
            image: <Image width={20} height={20} alt='' src={'/XD.svg'} />,
            title: "Chakra Soft UI Version",
            budget: "$14,000",
            status: "Working",
            completion: 60,
            id: 1
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
            width: 350,
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
            title: 'BUDGET',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data) => <Typography className='font-bold'>{data.budget || "Not set"}</Typography>
        },
        {
            title: 'STATUS',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data: ProjectType) => <Typography className='font-bold'>{data.status}</Typography>
        },
        {
            title: 'COMPLETION',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            render: (a, data: ProjectType) =>
                <div className='flex flex-col'>
                    <Typography className='font-bold text-greenBase'>{data?.completion || 0}%</Typography>
                    <Progress size={'small'} showInfo={false} strokeColor={"var(--green)"} percent={data?.completion || 0} />
                </div>
        },
        {
            title: '',
            key: 'operation',
            fixed: 'right',
            align: "center",
            width: 100,
            render: () => <a><MoreOutlined /></a>,
        },
    ];

    return (
        <div className='bg-white p-6 rounded-2xl'>
            <Typography className='font-bold text-lg'>Projects</Typography>
            <div className='flex flex-row gap-1 mb-2'>
                <Image width={15} height={15} alt='' src={"/Icons/agreeGreen.svg"} />
                <Typography className='text-textSoft font-bold '>30 done</Typography>
                <Typography className='text-textSoft '>this month</Typography>
            </div>
            <Table rowKey={({ id }) => id} pagination={false} columns={columns} dataSource={projects} scroll={{ x: 1300 }} />
        </div>
    )
}

export default ProjectsTable