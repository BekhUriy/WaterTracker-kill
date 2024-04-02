import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { LayoutBox } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <LayoutBox>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </LayoutBox>
    </>
  );
};

export default SharedLayout;
