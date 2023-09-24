import Modal from '@components/Modal/Modal';
import PostList from '@components/PostList/PostList';
import Button from '@components/ui/Button/Button';
import List from '@components/ui/List/List';
import ListItem from '@components/ui/ListItem/ListItem';
import Main from '@components/ui/Main/Main';
import {useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [buttonName, setButtonName] = useState('') 
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { name } = event.target as HTMLButtonElement
    setIsOpen(true);
    setButtonName(name);
  };
  return (
    <Main>
      {isOpen?
        <Modal isName={ buttonName} />: ''
      }
      <Button onClick={handleClick } name='로그인'>로그인</Button>
      <Button onClick={handleClick } name='회원가입'>회원가입</Button>
      <header className="main-header">
        <nav className="post__navigation">
          <List>
            <ListItem>
              <Link to='/posts' className="post__navigation--active">전체</Link>
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
