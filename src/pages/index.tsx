import DashboardChart from '@/components/molecules/DashboardChart';
import DashboardReadMore from '@/components/molecules/DashboardReadMore';
import DashboardTopItems from '@/components/molecules/DashboardTopItems';
import MainTemplate from '@/components/templates/MainTemplate';

export default function Home() {

  return (
    <MainTemplate>

      <div className='flex flex-col gap-6'>

        <DashboardTopItems />

        <DashboardReadMore />

        <DashboardChart />

      </div>

    </MainTemplate>
  )
}