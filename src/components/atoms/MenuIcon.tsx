import Image from 'next/image'
import React from 'react'

interface Iprops {
    src: string;
    isActive: boolean
}


const MenuIcon: React.FC<Iprops> = (props) => {

    console.log('props.isActive', props.isActive)

    return (
        <div style={{ width: "30px", height: "30px", backgroundColor: `${props.isActive === true ? "var(--green)" : "white"}` }} className={`flex justify-center align-middle  rounded-xl`}>
            <Image alt='' src={props.src} width={15} height={15} />
        </div>
    )

}

export default MenuIcon