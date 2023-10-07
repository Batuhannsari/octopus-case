import { Input, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Iprops {
    topNavigation: React.ReactNode
}

const TopNav: React.FC<Iprops> = (props) => {

    return (
        <div className='mt-6 mb-1 mx-12'>
            <div className='flex justify-end'>

                <Input className='w-48 rounded-2xl mr-4' size="large" placeholder="Type here..." prefix={<Image className='mr-2' width={15} height={15} alt='' src={'/Icons/searchBlack.svg'} />} />
                <Image className='mr-1' width={12} height={12} alt='' src={'/Icons/personGrey.svg'} />
                <Link className='self-center mr-4' href={"/signin"} >
                    <Typography style={{ fontSize: "12px" }} className='font-bold'>Sign In</Typography>
                </Link>
                <Image className='mr-4' width={12} height={12} alt='' src={'/Icons/settingsGrey.svg'} />
                <Image className='' width={12} height={12} alt='' src={'/Icons/notificationGrey.svg'} />

            </div>

            {
                props.topNavigation && props.topNavigation
            }

        </div>
    )

}

export default TopNav