import PostList from '@components/PostList/PostList';
import Profile from '@components/Profile/Profile';
import Main from '@components/ui/Main/Main';
import React from 'react';

const ProfilePage = () => {
  return (
    <div>
      <Main className="main">
        <Profile />
				<PostList hasNavigation={false } />
      </Main>
    </div>
  );
};

export default ProfilePage;
