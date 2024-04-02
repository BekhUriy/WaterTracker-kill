import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutBox } from './SharedLayout.styled';
import Header from './Header/Header';

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
