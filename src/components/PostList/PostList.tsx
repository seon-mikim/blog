import PostHeader from '@components/PostHeader/PostHeader';
import List from '@components/ui/List/List';
import ListItem from '@components/ui/ListItem/ListItem';
import { Link } from 'react-router-dom';

interface PostListProps {
	hasNavigation?: boolean
}

const PostList = ({ hasNavigation = true }: PostListProps) => {

  return (
		<List className="post__list">
			{hasNavigation&&<PostHeader />}
      {[...Array(10)].map((e, index) => (
        <ListItem className="post__box" key={index}>
          <Link to={`/posts/${index}`}>
            <div className="post__profile-box">
              <div className="post__profile"></div>
              <div className="post__author-name">작성자</div>
              <div className="post__date">2023.09.24 일요일</div>
            </div>
            <div className="post__title">게시글 제목입니다. {index}</div>
            <div className="post__content">게시글 내용입니다.</div>
          </Link>
          <div className="post__setting-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">수정</div>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
