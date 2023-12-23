import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUser } from '../../redux/auth/selectors';
import openIcon from '../../images/header/openUserMenuIcon.svg';
import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';
import {
  IconOpenUserMenu,
  User,
  UserAvatar,
  UserLogoStyled,
  UserName,
} from './UserLogo.styled';

export const UserLogo = () => {
  const userData = useSelector(selectUser);
  const usernameFromEmail = userData.email ? userData.email.split('@')[0] : 'V';
  const userName = userData.name ? userData.name : usernameFromEmail;
  const userAvatar = userData.avatar;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <UserLogoStyled onClick={handleDropdownOpen}>
      <User>
        <UserName>{userName}</UserName>
        <UserAvatar
          src={userAvatar}
          defoultAvatar={userName.charAt(0).toUpperCase()}
          alt="User avatar"
        ></UserAvatar>
      </User>
      <IconOpenUserMenu src={openIcon} alt="Open menu" />
      <UserLogoModal isOpen={isDropdownOpen} onClose={handleDropdownClose} />
    </UserLogoStyled>
  );
};
