import { Button, Input, Switch, Typography } from 'antd'
import Link from 'next/link'
import React from 'react'

interface Iprops {

}

const SignInCard: React.FC<Iprops> = (props) => {


    return (
        <div className='flex flex-col w-full max-w-sm'>

            <div className='flex flex-col gap-2 mb-9'>
                <Typography style={{ color: "var(--green)", fontSize: "2rem" }} className='font-bold '>Welcome Back</Typography>

                <Typography style={{ color: "var(--text-color-soft)" }} >Enter your email and password to sign in</Typography>
            </div>

            <div className='flex flex-col w-full gap-1 mb-6'>
                <Typography className='ml-1'>Email</Typography>
                <Input className='w-full h-12 rounded-2xl bg-transparent ' placeholder="Your email address" />
            </div>

            <div className='flex flex-col w-full gap-1 mb-6'>
                <Typography className='ml-1'>Password</Typography>
                <Input className='w-full h-12 rounded-2xl bg-transparent' placeholder="Your password" />
            </div>

            <div className='flex flex-row gap-2 mb-9' >
                <Switch size='small' defaultChecked onChange={() => { }} />
                <Typography className='ml-1 text-xs self-center'>Remember me</Typography>
            </div>

            <Button style={{ backgroundColor: "var(--green)", fontSize: "10px" }} className='h-11 rounded-xl text-white font-bold mb-6' >SIGN IN</Button>

            <div className='flex flex-row gap-1 justify-center '>
                <Typography style={{ color: "var(--text-color-soft)" }} className=''>Don't have an account?</Typography>
                <Link href={"/signup"}>
                    <Typography style={{ color: "var(--green)" }} className='font-bold'>Sign up</Typography>
                </Link>
            </div>

        </div>
    )

}

export default SignInCard