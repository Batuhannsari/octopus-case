import { Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import TopNav from "../atoms/TopNav";
import LeftNavBar from "../molecules/LeftNavBar";

interface Props {
    children: React.ReactNode;
}

function MainTemplate({ children }: Props) {

    const router = useRouter()

    const topNavigation = router.pathname.includes("tables") ? <div className='-mt-4'>
        <div className='flex flex-row'>
            <Link href={"/"} className='pr-1 text-textSoft text-xs'>Pages</Link>
            <Typography className="text-xs">/ Tables</Typography>
        </div>
        <Typography className='font-bold'>Tables</Typography>
    </div> : <Typography className='font-bold'>Dashboard</Typography>


    return (
        <>
            <div className="flex flex-row h-screen">
                <div className="w-64 px-4 py-8" >
                    <LeftNavBar />
                </div>
                <div className="flex flex-col flex-1">

                    <TopNav topNavigation={topNavigation} />

                    <div className="flex-1 px-8 py-7 ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainTemplate;