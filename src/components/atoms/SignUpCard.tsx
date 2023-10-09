import { Button, Input, Switch, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Iprops {

}

const SignUpCard: React.FC<Iprops> = (props) => {

    return (
        <div className='flex flex-col max-w-md w-full bg-white rounded-2xl px-12 py-11  shadow-lg gap-5' >

            <Typography className='self-center font-bold text-lg'>Register with</Typography>

            <div className='flex flex-row self-center gap-4' >
                <div className='flex cursor-pointer justify-center w-20 h-20 border border-var(--border) rounded-2xl' >
                    <Image width={31} height={31} alt='' src={"/Icons/facebookBlue.svg"} />
                </div>
                <div className='flex cursor-pointer justify-center w-20 h-20 border border-var(--border) rounded-2xl' >
                    <Image width={31} height={31} alt='' src={"/Icons/appleBlue.svg"} />
                </div>
                <div className='flex cursor-pointer justify-center w-20 h-20 border border-var(--border) rounded-2xl' >
                    <Image width={24} height={24} alt='' src={"/Icons/googleBlue.svg"} />
                </div>
            </div>

            <Typography className='self-center font-bold text-lg text-textSoft'>Or</Typography>

            <div className='flex flex-col w-full gap-1'>
                <Typography className='ml-1'>Name</Typography>
                <Input className='w-full h-12 rounded-2xl' placeholder="Your full name" />
            </div>

            <div className='flex flex-col w-full gap-1'>
                <Typography className='ml-1'>Email</Typography>
                <Input className='w-full h-12 rounded-2xl' placeholder="Your email address" />
            </div>

            <div className='flex flex-col w-full gap-1'>
                <Typography className='ml-1'>Password</Typography>
                <Input className='w-full h-12 rounded-2xl' placeholder="Your password" />
            </div>

            <div className='flex flex-row gap-2 mb-3' >
                <Switch size='small' defaultChecked onChange={() => { }} />
                <Typography className='ml-1 text-xs self-center'>Remember me</Typography>
            </div>

            <Button className='h-11 text-[10px] bg-greenBase rounded-xl text-white font-bold' >SIGN UP</Button>

            <div className='flex flex-row gap-1 justify-center '>
                <Typography className='text-textSoft'>Already have an account?</Typography>
                <Link href={"/signin"}>
                    <Typography className='font-bold text-greenBase'>Sign in</Typography>
                </Link>
            </div>

        </div>
    )

}

export default SignUpCard