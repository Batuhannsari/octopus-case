import { Typography } from 'antd'
import Image from 'next/image'
import React from 'react'
import SalesOverviewChart from '../atoms/SalesOverviewChart'

interface Iprops {

}

const DashboardChart: React.FC<Iprops> = (props) => {

    return (

        <div className="flex flex-wrap">

            <div className="w-full lg:w-5/12  lg:pr-4 pr-0 mb-6 lg:mb-0">

                <div className='flex flex-row justify-between bg-white p-4 rounded-2xl'>
                    <Typography style={{ color: "var(--text-color-soft)" }} className='max-w-xs'>From colors, cards, typography to complex elements,
                        you will find the full documentation.</Typography>
                    <div className="flex justify-center bg-cover bg-no-repeat bg-center rounded-xl " style={{ width: "360px", height: "255px", backgroundImage: "url('/readMoreImage.png')" }}>

                        <Image className='self-center' width={169} height={32} alt='' src={"/octopusLogoWhite.svg"} />

                    </div>
                </div>

            </div>

            <div className="flex flex-col w-full lg:w-7/12 bg-white px-5 py-7 rounded-2xl gap-10 ">
              
                <div>
                    <Typography className='font-bold text-lg'>Sales overview</Typography>
                    <div className='flex flex-row'>
                        <Typography className='font-bold text-[#48BB78]'>(+5) more</Typography>
                        <Typography className='text-[var(--text-color-soft)]'>in 2021</Typography>
                    </div>
                </div>

                <SalesOverviewChart />

            </div>

        </div>
    )

}

export default DashboardChart