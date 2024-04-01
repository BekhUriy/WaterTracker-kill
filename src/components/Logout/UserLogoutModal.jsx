import React from 'react';
import {
  Buttons,
  CancelButton,
  CancelLi,
  LogoutButton,
  LogoutLi,
  LogoutTitle,
  TitleOne,
  TitleTwo,
  WrapperLogout,
} from './UserLogout.styled';
import { CloseSvg } from './CloseSvg';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/thunk';
import { modalClose } from '../../redux/setingModalSlicer';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      modalClose();
    }
  };

  const handleLogout = token => {
    dispatch(logoutThunk(token));
    modalClose();
  };

  return (
    <WrapperLogout
      onClick={handleBackdropClick(modalClose)}
      onKeyDown={handleKeyPress}
      tabIndex={-1}
    >
      <LogoutTitle>
        <TitleOne>Log out</TitleOne>
        <CloseSvg onClick={modalClose} />
      </LogoutTitle>
      <TitleTwo>Do you really want to leave</TitleTwo>
      <Buttons>
        <CancelLi>
          <CancelButton onClick={modalClose}>Cancel</CancelButton>
        </CancelLi>
        <LogoutLi>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        </LogoutLi>
      </Buttons>
    </WrapperLogout>
  );
};
