import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/Header'
import { Page } from '@/shared/ui/Page/Page'
import { Sidebar } from '@/widgets/Sidebar'
import s from './Layout.module.scss'

export function Layout() {
  return <div className={ 'app' }>
    <Header/>
    <div className={ s.content }>
      <Sidebar/>
      <Page>
        <Outlet/>
      </Page>
    </div>
  </div>
}
