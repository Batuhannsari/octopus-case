import React, { useEffect } from "react";
import Template from "../atoms/Template";
import LeftNavBar from "../molecules/LeftNavBar";

interface Props {
    children: React.ReactNode;
}

function MainTemplate({ children }: Props) {

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
                    <div className="bg-red-100">topnav</div>
                    <div className="flex-1 px-8 py-7 ">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainTemplate;