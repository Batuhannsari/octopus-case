import { User } from '@/ınterfaces/UsersTypes'
import { Typography } from 'antd'
import React from 'react'

interface Iprops {
    data: User
}

const FunctionCard: React.FC<Iprops> = (props) => {

    return (
        <div className=''>
            <Typography className='font-bold'>{props.data.company.title}</Typography>
            <Typography className='font-bold text-textSoft' >{props.data.company.department}</Typography>
        </div>)

}

export default FunctionCard