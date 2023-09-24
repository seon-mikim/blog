import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image"></div>
        <div>
          <div className="profile__email">tjsal2009@naver.com</div>
          <div className="profile__name">김선미</div>
        </div>
      </div>
      <Link to="/" className="profile__logout">
        로그아웃
      </Link>
    </div>
  );
};

export default Profile;
