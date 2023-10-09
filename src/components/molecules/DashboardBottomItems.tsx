import { Steps, Typography } from 'antd'
import Image from 'next/image'
import React from 'react'
import ProjectsTable from '../organisms/ProjectsTable'
import ProjectsTableForDashboard from '../organisms/ProjectsTableForDashboard'

interface Iprops {

}

const DashboardBottomItems: React.FC<Iprops> = (props) => {

    return (

        <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12  lg:pr-4 pr-0 mb-6 lg:mb-0">

                <div className=' bg-white px-5 py-7 rounded-2xl'>
                    <ProjectsTableForDashboard />
                </div>

            </div>

            <div className="flex flex-col justify-center w-full lg:w-4/12   bg-white p-4 rounded-2xl  ">

                <div className='mb-9'>
                    <Typography className='font-bold text-lg'>Orders overview</Typography>
                    <div className='flex flex-row gap-1'>
                        <Typography className='font-bold text-[#48BB78]' >(+30%)</Typography>
                        <Typography className='text-[var(--text-color-soft)]'>this month</Typography>
                    </div>
                </div>

                <Steps
                    direction="vertical"
                    size="small"
                    current={1}
                    items={[
                        { title: <Typography className='font-bold'>'$2400, Design changes'</Typography>, description: <Typography className='font-bold text-xs text-[var(--text-color-soft)]'>"22 DEC 7:20 PM"</Typography>, icon: <Image width={16} height={16} alt='' src={'/Icons/notificationGreen.svg'} /> },
                        { title: <Typography className='font-bold'>'New order #4219423'</Typography>, description: <Typography className='font-bold text-xs text-[var(--text-color-soft)]'>"21 DEC 11:21 PM"</Typography>, icon: <Image width={16} height={16} alt='' src={'/Icons/web3.svg'} /> },
                        { title: <Typography className='font-bold'>'Server Payments for April'</Typography>, description: <Typography className='font-bold text-xs text-[var(--text-color-soft)]'>"21 DEC 9:28 PM"</Typography>, icon: <Image width={16} height={16} alt='' src={'/Icons/cartBlue.svg'} /> },
                        { title: <Typography className='font-bold'>'New card added for order #3210145'</Typography>, description: <Typography className='font-bold text-xs text-[var(--text-color-soft)]'>"20 DEC 3:52 PM"</Typography>, icon: <Image width={16} height={16} alt='' src={'/Icons/walletYellow.svg'} /> },
                        { title: <Typography className='font-bold'>'Unlock packages for Development'</Typography>, description: <Typography className='font-bold text-xs text-[var(--text-color-soft)]'>"19 DEC 11:35 PM"</Typography>, icon: <Image width={16} height={16} alt='' src={'/Icons/unknownPurple.svg'} /> },
                        { title: <Typography className='font-bold'>'New order #9851258'</Typography>, description: <Typography className='font-bold text-xs text-[var(--text-color-soft)]'>"18 DEC 4:41 PM"</Typography>, icon: <Image width={16} height={16} alt='' src={'/XD.svg'} /> },
                    ]}
                />

            </div>
        </div>
    )

}

export default DashboardBottomItems