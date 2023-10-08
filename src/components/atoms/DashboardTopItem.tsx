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
                <Typography style={{ color: "var(--text-color-soft)" }} className='text-xs font-bold'>{props.title}</Typography>

                <div className='flex flex-row gap-1'>
                    <Typography className='font-bold text-lg'>{props.value}</Typography>
                    <Typography style={{ color: props.percent > 0 ? "#48BB78" : "#E53E3E" }} className='font-bold self-center'>{props.percent}%</Typography>
                </div>

            </div>
            <div style={{ backgroundColor: "var(--green)" }} className='flex justify-center rounded-xl w-11 h-11'>{props.icon}</div>
        </div >
    )

}

export default DashboardTopItem