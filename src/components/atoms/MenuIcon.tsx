import Image from 'next/image';
import React from 'react';

interface Iprops {
    src: string;
    isActive: boolean
}

const MenuIcon: React.FC<Iprops> = (props) => {

    return (
        <div className={`flex justify-center align-middle w-[30px] h-[30px] rounded-xl ${props.isActive ? "bg-greenBase" : "bg-white"}`}>
            <Image alt='' src={props.src} width={15} height={15} />
        </div>
    )

}

export default MenuIcon