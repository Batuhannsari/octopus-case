import { User } from '@/ınterfaces/UsersTypes'
import { Typography } from 'antd'
import Image from 'next/image'
import React from 'react'

interface Iprops {
    data: User
}

const AuthorCard: React.FC<Iprops> = (props) => {

    const defaultImage = "https://robohash.org/hicveldicta.png"

    return (
        <div className='flex flex-row gap-4'>
            <Image className='border border-[var(--text-color-soft)] rounded-xl' width={40} height={40} alt='' src={props?.data?.image || defaultImage} />
            <div className='self-center'>
                <Typography className='font-bold'>{props.data.firstName + " " + props.data.lastName}</Typography>
                <Typography className='font-bold text-[var(--text-color-soft)]' /* buraya bak */>{props.data.email}</Typography>
            </div>
        </div>
    )

}

export default AuthorCard