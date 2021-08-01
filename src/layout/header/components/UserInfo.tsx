import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import defaultAvatar from './default-avatar.png';

const UserInfo = () => {
  return (
    <a className="flex items-center" href="/#">
      <div className="hidden md:flex flex-col items-end mr-2 text-sm">
        <span className=" font-bold leading-none">Saiby Alimentos</span>
        <small className="text-gray-600">
          Mi perfil <FontAwesomeIcon icon={faChevronDown} size="xs" />
        </small>
      </div>
      <img
        src={defaultAvatar}
        className="rounded-full w-8 h-8"
        alt="user-avatar"
        title="Mi perfil"
      />
    </a>
  );
};

export default UserInfo;
