import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/Header';
import { Page } from '@/widgets/Page';
import { Sidebar } from '@/widgets/Sidebar';
import s from './Layout.module.scss';
import React, { memo } from 'react';

export const Layout = memo(function Layout() {
  return (
    <div className={'app'}>
      <Header />
      <div className={s.content}>
        <Sidebar />
        <Page>
          <Outlet />
        </Page>
      </div>
    </div>
  );
});
