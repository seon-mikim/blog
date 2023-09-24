import List from '@components/ui/List/List';
import ListItem from '@components/ui/ListItem/ListItem';
import React from 'react'
import { Link } from 'react-router-dom';

const PostHeader = () => {
	return (
    <header className="main-header">
      <nav className="post__navigation">
        <List>
          <ListItem>
            <Link to="/posts" className="post__navigation--active">
              전체
            </Link>
          </ListItem>
          <ListItem>
            <div>나의 글</div>
          </ListItem>
        </List>
      </nav>
    </header>
  );
}

export default PostHeader