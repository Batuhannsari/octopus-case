import SignInCard from '@/components/atoms/SignInCard';
import SignTopNav from '@/components/atoms/SignTopNav';
import SignUpCard from '@/components/atoms/SignUpCard';
import Image from 'next/image';

export default function SignIn() {

  return (
    <>
      <SignTopNav />

      <div className='flex w-full absolute justify-center align-middle'>
        <div className='w-full max-w-5xl mt-72'>
          <SignInCard />
        </div>
      </div>

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