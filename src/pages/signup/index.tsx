import SignTopNav from '@/components/atoms/SignTopNav';
import SignUpCard from '@/components/atoms/SignUpCard';
import { Typography } from 'antd';

export default function SignIn() {

  return (
    <>
      <SignTopNav />

      <div className='flex flex-col absolute w-full mt-36 gap-1'>

        <Typography className='flex text-white max-w-xs self-center font-bold' style={{ fontSize: "32px" }} >Welcome!</Typography>
        <Typography className='flex text-white max-w-xs self-center text-center'>Use these awesome forms to login or create new account in your project for free.</Typography>
      </div>

      <div className='flex justify-center absolute w-full mt-72 '>
        <SignUpCard />
      </div>


      <div className="flex flex-col h-screen w-full ">
        <div className="flex flex-row justify-center align-middle gap-2 m-6 h-1/2 rounded-2xl bg-cover bg-no-repeat bg-center " style={{ backgroundImage: "url('/signup.png')" }}></div>
        <div className="w-full h-1/2"></div>
      </div>
    </>
  )
}