import Image from 'next/image'
import React from 'react'
import DashboardTopItem from '../atoms/DashboardTopItem'

interface Iprops {

}

const DashboardTopItems: React.FC<Iprops> = (props) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <DashboardTopItem title='Today’s Money' percent={55} value='$53,000' icon={<Image width={22} height={22} alt='' src={"/Icons/wallet2White.svg"} />} />
            <DashboardTopItem title='Today’s Users' percent={5} value='2,300' icon={<Image width={22} height={22} alt='' src={"/Icons/worldWhite.svg"} />} />
            <DashboardTopItem title='New Clients' percent={-14} value='+3,052' icon={<Image width={22} height={22} alt='' src={"/Icons/documentWhite.svg"} />} />
            <DashboardTopItem title='Total Sales' percent={8} value='$173,000' icon={<Image width={22} height={22} alt='' src={"/Icons/chartWhite.svg"} />} />
        </div>
    )

}

export default DashboardTopItems