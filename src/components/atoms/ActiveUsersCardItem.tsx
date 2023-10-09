import { Progress, Typography } from 'antd'
import Image from 'next/image'
import React, { ReactNode } from 'react'

interface Iprops {
    title: string
    value: string
    percent: number
    icon: ReactNode
}

const ActiveUsersCardItem: React.FC<Iprops> = (props) => {

    return (
        <div className='flex flex-col max-w-[100px] w-full  '>

            <div className='flex flex-row gap-[10px] mb-2'>
                <div className='flex bg-[var(--green)] rounded-md w-6 h-6 align-middle justify-center'>
                    {props.icon}
                </div>

                <Typography className='self-center font-bold text-xs text-[var(--text-color-soft)]'>{props.title}</Typography>

            </div>

            <Typography className='font-bold text-lg mb-1'>{props.value}</Typography>

            <Progress size={'small'} showInfo={false} strokeColor={"var(--green)"} percent={props.percent} />

        </div>
    )

}

export default ActiveUsersCardItem