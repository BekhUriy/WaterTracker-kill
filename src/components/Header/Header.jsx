import React from 'react';
import { UserAuth } from '/UserAuth/UserAuth';
import { UserButton } from './userButton/userButton';
import { Block, HeaderStyled } from './header-styled';
import { useSelector } from 'react-redux';
import { SiteLogo } from './siteLogo/siteLogo';

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <HeaderStyled media>
      <div>
        <SiteLogo />
      </div>
      <Block>{!isLogin ? <UserAuth /> : <UserButton />}</Block>
    </HeaderStyled>
  );
};

export default Header;
