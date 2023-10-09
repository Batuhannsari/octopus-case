import { Typography } from 'antd'
import Image from 'next/image'
import React from 'react'

interface Iprops {

}

const DashboardReadMore: React.FC<Iprops> = (props) => {

    return (

        <div className="flex flex-wrap">
            <div className="w-full lg:w-7/12  lg:pr-4 pr-0 mb-6 lg:mb-0">

                <div className='flex flex-row justify-between bg-white p-4 rounded-2xl'>
                    <Typography className='max-w-xs text-textSoft'>From colors, cards, typography to complex elements,
                        you will find the full documentation.</Typography>
                    <div className="flex justify-center bg-cover bg-no-repeat bg-center rounded-xl w-[360px] h-[255px] " style={{ backgroundImage: "url('/readMoreImage.png')" }}>

                        <Image className='self-center' width={169} height={32} alt='' src={"/octopusLogoWhite.svg"} />

                    </div>
                </div>

            </div>

            <div className="flex justify-center w-full lg:w-5/12   bg-white p-4 rounded-2xl  ">

                <div className='w-full bg-cover bg-no-repeat bg-center rounded-xl p-5  max-w-[619px] h-[255px]' style={{ background: "linear-gradient(to top, rgba(49, 56, 96, .1), #151928) ,url('/dashboardImage.png')" }}>
                    <div className='flex flex-col h-full max-w-sm justify-between'>
                        <div className='flex flex-col gap-1'>
                            <Typography className='text-white text-lg font-bold'>Work with the Rockets</Typography>
                            <Typography className='text-white'>Wealth creation is an evolutionarily recent positive-sum game.
                                It is all about who take the opportunity first.</Typography>
                        </div>
                        <div className='cursor-pointer flex flex-row gap-1'>
                            <Typography className='text-white font-bold text-[10px]'>Read more</Typography>
                            <Image className='self-center' width={12} height={12} alt='' src={"/Icons/arrowRightWhite.svg"} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default DashboardReadMore