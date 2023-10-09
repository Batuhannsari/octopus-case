import AuthorsTable from '@/components/organisms/AuthorsTable';
import ProjectsTable from '@/components/organisms/ProjectsTable';
import MainTemplate from '@/components/templates/MainTemplate';
import { useDummyDataContext } from '@/context/DummyDataContext';
import { useEffect } from 'react';


export default function Home() {
  const { users, getUsers } = useDummyDataContext()

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <MainTemplate>

      <div className='flex flex-col gap-6'>

        <AuthorsTable />

        <ProjectsTable />

      </div>

    </MainTemplate>
  )
}