import MenuItem from '@/components/atoms/MenuItem';
import MainTemplate from '@/components/templates/MainTemplate';
import { useAuthContext } from '@/context/AuthContext';


export default function Home() {
  const { deneme, setDeneme } = useAuthContext();

  return (
    <MainTemplate>
      <div>tables</div>
    </MainTemplate>
  )
}