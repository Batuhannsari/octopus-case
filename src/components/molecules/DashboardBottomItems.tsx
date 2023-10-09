import { Typography } from 'antd'
import Image from 'next/image'
import React from 'react'
import ProjectsTable from '../organisms/ProjectsTable'
import ProjectsTableForDashboard from '../organisms/ProjectsTableforDashboard'

interface Iprops {

}

const DashboardBottomItems: React.FC<Iprops> = (props) => {

    return (

        <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12  lg:pr-4 pr-0 mb-6 lg:mb-0">

                <div className=' bg-white px-5 py-7 rounded-2xl'>
                    <ProjectsTableForDashboard />
                </div>

            </div>

            <div className="flex  w-full lg:w-4/12   bg-white p-4 rounded-2xl  ">

                2

            </div>
        </div>
    )

}

export default DashboardBottomItems