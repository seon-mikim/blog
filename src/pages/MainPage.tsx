import PostList from '@components/PostList/PostList';
import List from '@components/ui/List/List';
import ListItem from '@components/ui/ListItem/ListItem';
import Main from '@components/ui/Main/Main';

import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Main className='main'>
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
      <PostList />
    </Main>
  );
};

export default MainPage;
