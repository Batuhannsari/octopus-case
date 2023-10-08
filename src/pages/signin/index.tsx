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
      <div className="flex h-screen ">
        <div className="w-7/12"></div>
        <div className="flex flex-row justify-center align-middle gap-2 w-5/12 h-5/6 rounded-bl-3xl bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/signin.png')" }}>
          <Image width={76} height={71} alt='' src={'/octopusWhite.svg'} />
          <Image width={278} height={51} alt='' src={'/octopusTextWhite.svg'} />
        </div>
      </div>
    </>
  )
}