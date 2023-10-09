import { loginRequest } from '@/api/controllers/account-controller'
import { useDummyDataContext } from '@/context/DummyDataContext'
import { Button, Input, Switch, Typography } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface Iprops {

}

const SignInCard: React.FC<Iprops> = (props) => {

    const { setCurrentUser } = useDummyDataContext()
    const router = useRouter()

    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
        maskedPassword: "",
        rememberMe: true,
    })

    const handleLogin = async () => {
        try {
            let res = await loginRequest({ username: loginForm.username, password: loginForm.password })
            if (res) {
                toast.success("Giriş başarılı. Hoş geldiniz.");
                setCurrentUser(res.data)
                router.push("/")
            }
        } catch (error) {
            toast.error("Giriş bilgilerinizi kontrol ediniz!");
        }
    }

    return (
        <div className='flex flex-col w-full max-w-sm'>

            <div className='flex flex-col gap-2 mb-9'>
                <Typography className='font-bold text-greenBase text-[32px]'>Welcome Back</Typography>

                <Typography className='text-textSoft' >Enter your email and password to sign in</Typography>
            </div>

            <div className='flex flex-col w-full gap-1 mb-6'>
                <Typography className='ml-1'>Username</Typography>
                <Input onChange={(e) => { setLoginForm({ ...loginForm, username: e.target.value }) }} className='w-full h-12 rounded-2xl bg-transparent ' placeholder="Your username" />
            </div>

            <div className='flex flex-col w-full gap-1 mb-6'>
                <Typography className='ml-1'>Password</Typography>
                <Input value={loginForm.password} onChange={(e) => { setLoginForm({ ...loginForm, password: e.target.value, }) }} className='w-full h-12 rounded-2xl bg-transparent' placeholder="Your password" />
            </div>

            <div className='flex flex-row gap-2 mb-9' >
                <Switch size='small' checked={loginForm.rememberMe} onChange={() => { setLoginForm({ ...loginForm, rememberMe: !loginForm.rememberMe }) }} />
                <Typography className='ml-1 text-xs self-center'>Remember me</Typography>
            </div>

            <Button onClick={() => { handleLogin() }} className='h-11 rounded-xl text-white font-bold mb-6 bg-greenBase text-[10px]' >SIGN IN</Button>

            <div className='flex flex-row gap-1 justify-center '>
                <Typography className='text-textSoft'>Don't have an account?</Typography>
                <Link href={"/signup"}>
                    <Typography className='font-bold text-greenBase'>Sign up</Typography>
                </Link>
            </div>

        </div>
    )

}

export default SignInCard