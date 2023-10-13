import Carosel from '@components/Carosel/Carosel';
import PostList from '@components/PostList/PostList';
import Main from '@components/ui/Main/Main';

const MainPage = () => {
  return (
    <>
      <Carosel />
      <Main className="main">
        <PostList />
      </Main>
    </>
  );
};

export default MainPage;
