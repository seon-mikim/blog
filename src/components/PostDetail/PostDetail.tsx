import React from 'react';

const PostDetail = () => {
  return (
    <div>
      <div className="post__detail">
        <div className="post_box">
          <div className="post__title">제목</div>
          <div className="post__profile-box">
            <div className="post__profile"></div>
            <div className="post__author-name">작성자</div>
            <div className="post__date">2023.09.24 일요일</div>
          </div>
          <div className="post__setting-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">수정</div>
          </div>
          <div className="post__content">게시글 내용입니다.</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
