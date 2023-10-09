import { Typography } from 'antd'
import React, { ReactNode } from 'react'

interface Iprops {
    icon: ReactNode,
    title: string,
    value: string,
    percent: number
}

const DashboardTopItem: React.FC<Iprops> = (props) => {

    return (
        <div className='flex flex-row justify-between  bg-white p-4 rounded-2xl'>
            <div>
                <Typography className='text-xs font-bold text-textSoft'>{props.title}</Typography>

                <div className='flex flex-row gap-1'>
                    <Typography className='font-bold text-lg'>{props.value}</Typography>
                    <Typography className={`font-bold self-center ${props.percent > 0 ? "text-[#48BB78]" : "text-[#E53E3E]"} `}>{props.percent}%</Typography>
                </div>

            </div>
            <div className='flex justify-center rounded-xl w-11 h-11 bg-greenBase'>{props.icon}</div>
        </div >
    )

}

export default DashboardTopItem