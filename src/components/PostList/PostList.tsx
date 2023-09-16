import React from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  return (
    <div className="post__list">
      {[...Array(10)].map((e, index) => (
        <div className="post__box" key={index}>
					<Link to={`/posts/${index}`}>
						<div className='post__profile-box'>
							<div className='post__profile'>이미지</div>
							<div className='post__author-name'>작성자</div>
							<div className='post__date'>작성 시간</div>
						</div>
						<div className='post__title'>게시글 제목입니다. {index}</div>
						<div className='post__content'>게시글 내용입니다.</div>
						<div className="post__setting-box">
							<div className="post__delete">삭제</div>
							<div className="post__edit">수정</div>
						</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
