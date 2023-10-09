import { Button, Typography } from 'antd'
import React from 'react'
import MenuIcon from './MenuIcon'

interface Iprops {

}

const NeedHelpCard: React.FC<Iprops> = (props) => {

    return (
        <div className="w-56 h-auto bg-cover bg-no-repeat bg-center rounded-2xl p-4 " style={{ backgroundImage: "url('/NeedHelpBG.png')" }}>

            <MenuIcon isActive={false} src={`/Icons/questionGreen.svg`} />

            <Typography className='pt-5 text-white font-bold' >Need help?</Typography>
            <Typography className='pb-2 text-white' >Please check our docs</Typography>
            <Button block className='font-bold text-[10px] w-[35px] h-[35px] bg-white'  >DOCUMENTATION</Button>

        </div>
    )

}

export default NeedHelpCard