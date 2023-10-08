import { Button, Typography } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

interface Iprops {

}

const SignTopNav: React.FC<Iprops> = (props) => {

    const router = useRouter()

    const activePage = router.pathname.includes("signin") ? "signin" : router.pathname.includes("signup") ? "signup" : ""


    return (
        <div className='flex absolute w-full justify-center z-20'>
            <div className={`flex flex-row align-middle justify-between w-full max-w-5xl ${activePage === "signin" ? "backdrop-blur-3xl" : activePage === "signup" ? "backdrop-blur-none" : ""} mt-6 px-5 py-4 rounded-2xl ${activePage === "signin" ? "bg-white" : activePage === "signup" ? "bg-none" : ""} opacity-90`}>

                <Link href={'/'} >
                    <Image className='opacity-100 ml-12' width={170} height={32} alt='' src={activePage === "signin" ? '/octopusLogoGreen.svg' : activePage === "signup" ? "/octopusLogoWhite.svg" : ""} />
                </Link>

                <div className='opacity-100 flex flex-row align-middle gap-7'>
                    <Link href={'/'} className='flex flex-row align-middle gap-1'>
                        <Image className='' width={12} height={12} alt='' src={activePage === "signin" ? '/Icons/dashboardBlue.svg' : activePage === "signup" ? '/Icons/dashboardWhite.svg' : ""} />
                        <Typography style={{ fontSize: "10px", color: activePage === "signin" ? "var(--text-color)" : activePage === "signup" ? "white" : "" }} className='font-bold self-center'>DASHBOARD</Typography>
                    </Link>

                    <div className='flex flex-row align-middle gap-1 cursor-pointer '>
                        <Image className='' width={12} height={12} alt='' src={activePage === "signin" ? '/Icons/personBlue.svg' : activePage === "signup" ? '/Icons/personWhite.svg' : ""} />
                        <Typography style={{ fontSize: "10px", color: activePage === "signin" ? "var(--text-color)" : activePage === "signup" ? "white" : "" }} className='font-bold self-center'>PROFILE</Typography>
                    </div>

                    <Link href={'/signup'} className='flex flex-row align-middle gap-1'>
                        <Image className='' width={12} height={12} alt='' src={activePage === "signin" ? '/Icons/signUpBlue.svg' : activePage === "signup" ? '/Icons/signUpWhite.svg' : ""} />
                        <Typography style={{ fontSize: "10px", color: activePage === "signin" ? "var(--text-color)" : activePage === "signup" ? "white" : "" }} className='font-bold self-center'>SIGN UP</Typography>
                    </Link>

                    <Link href={'/signin'} className='flex flex-row align-middle gap-1'>
                        <Image className='' width={12} height={12} alt='' src={activePage === "signin" ? '/Icons/keyBlue.svg' : activePage === "signup" ? '/Icons/keyWhite.svg' : ""} />
                        <Typography style={{ fontSize: "10px", color: activePage === "signin" ? "var(--text-color)" : activePage === "signup" ? "white" : "" }} className='font-bold self-center'>SIGN IN</Typography>
                    </Link>

                </div>

                <Button shape='round' style={{ width: "150px", height: "35px", background: activePage === "signin" ? "linear-gradient(to top right, #313860, #151928)" : activePage === "signup" ? "white" : "", fontSize: "10px", color: activePage === "signin" ? "white" : activePage === "signup" ? "var(--text-color)" : "" }} className='opacity-100 font-bold shadow-none' type="primary">Free Download</Button>

            </div>
        </div>
    )

}

export default SignTopNav