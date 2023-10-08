import { Typography } from "antd";
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
            <Typography style={{ color: "var(--text-color-soft)", fontSize: "12px" }} className='pr-1'>Pages</Typography>
            <Typography style={{ fontSize: "12px" }} >/ Tables</Typography>
        </div>
        <Typography className='font-bold'>Tables</Typography>
    </div> : <Typography className='font-bold'>Dashboard</Typography>


    return (
        <>
            {/* <TopNav />
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                {children}
            </Container> */}
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