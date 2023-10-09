import { useDummyDataContext } from '@/context/DummyDataContext'
import { Input, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Iprops {
    topNavigation: React.ReactNode
}

const TopNav: React.FC<Iprops> = (props) => {

    const { currentUser, setCurrentUser } = useDummyDataContext()

    return (
        <div className='mt-6 mb-1 mx-12'>
            <div className='flex justify-end'>

                <Input className='w-48 rounded-2xl mr-4' size="large" placeholder="Type here..." prefix={<Image className='mr-2' width={15} height={15} alt='' src={'/Icons/searchBlack.svg'} />} />
                {
                    currentUser && currentUser.id !== 0 ?
                        <div className='flex flex-row self-center mr-4'  >
                            <Image className='mr-1' width={12} height={12} alt='' src={'/Icons/personGrey.svg'} />
                            <Typography style={{ fontSize: "12px" }} className='font-bold'>{currentUser.firstName}</Typography>
                        </div>
                        :
                        <Link className='flex flex-row self-center mr-4' href={"/signin"} >
                            <Image className='mr-1' width={12} height={12} alt='' src={'/Icons/personGrey.svg'} />
                            <Typography style={{ fontSize: "12px" }} className='font-bold'>Sign In</Typography>
                        </Link>
                }
                <div className='mr-4 self-center cursor-pointer' >
                    <Image width={12} height={12} alt='' src={'/Icons/settingsGrey.svg'} />
                </div>
                <div className='self-center cursor-pointer' >
                    <Image width={12} height={12} alt='' src={'/Icons/notificationGrey.svg'} />
                </div>

            </div>

            {
                props.topNavigation && props.topNavigation
            }

        </div>
    )

}

export default TopNav