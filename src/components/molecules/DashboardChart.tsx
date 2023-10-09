import { Typography } from 'antd'
import Image from 'next/image'
import React from 'react'
import ActiveUsersCardItem from '../atoms/ActiveUsersCardItem'
import ActiveUsersChart from '../atoms/ActiveUsersChart'
import SalesOverviewChart from '../atoms/SalesOverviewChart'

interface Iprops {

}

const DashboardChart: React.FC<Iprops> = (props) => {

    return (

        <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12  lg:pr-4 pr-0 mb-6 lg:mb-0">
                <div className='flex flex-col justify-between bg-white p-4 rounded-2xl gap-6'>

                    <ActiveUsersChart />

                    <div className='mb-3'>
                        <Typography className='font-bold text-lg'>Active Users</Typography>
                        <div className='flex flex-row gap-1'>
                            <Typography className='font-bold text-[#48BB78]' >(+23)</Typography>
                            <Typography className='text-textSoft'>than last week</Typography>
                        </div>
                    </div>

                    <div className='flex flex-row gap-12'>
                        <ActiveUsersCardItem title='Users' percent={70} value='32,984' icon={<Image width={12} height={12} alt='' src={"/Icons/wallet2White.svg"} />} />
                        <ActiveUsersCardItem title='Clicks' percent={85} value='2,42m' icon={<Image width={12} height={12} alt='' src={"/Icons/sharpWhite.svg"} />} />
                        <ActiveUsersCardItem title='Sales' percent={40} value='2,400$' icon={<Image width={12} height={12} alt='' src={"/Icons/cartWhite.svg"} />} />
                        <ActiveUsersCardItem title='Items' percent={60} value='320' icon={<Image width={12} height={12} alt='' src={"/Icons/settingsWhite.svg"} />} />
                    </div>

                </div>
            </div>

            <div className="flex flex-col w-full lg:w-7/12 bg-white px-5 py-7 rounded-2xl gap-10 ">

                <div>
                    <Typography className='font-bold text-lg'>Sales overview</Typography>
                    <div className='flex flex-row gap-1'>
                        <Typography className='font-bold text-[#48BB78]'>(+5) more</Typography>
                        <Typography className='text-textSoft'>in 2021</Typography>
                    </div>
                </div>

                <SalesOverviewChart />

            </div>
        </div>
    )

}

export default DashboardChart