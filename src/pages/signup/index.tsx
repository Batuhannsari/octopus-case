import MenuItem from '@/components/atoms/MenuItem';
import SignTopNav from '@/components/atoms/SignTopNav';
import MainTemplate from '@/components/templates/MainTemplate';
import { useAuthContext } from '@/context/AuthContext';
import { Typography } from 'antd';
import Image from 'next/image';


export default function SignIn() {
  const { deneme, setDeneme } = useAuthContext();

  return (
    <>
      <SignTopNav />
      <div className='absolute' >
        asd
      </div>
      <div className="flex flex-col h-screen w-full ">
        <div className="flex flex-row justify-center align-middle gap-2 m-6 h-1/2 rounded-2xl bg-cover bg-no-repeat bg-center " style={{ backgroundImage: "url('/signup.png')" }}></div>
        <div className="w-full h-1/2"></div>
      </div>
    </>
  )
}