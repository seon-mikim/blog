import PostList from '@components/PostList/PostList'
import React from 'react'

const MainPage = () => {
	return (
		<>
			<div className='post__navigation'>
				<div className='post__navigation--active'>전체</div>
				<div>나의 글</div>
			</div>
		<PostList/>
		</>
	)
}

export default MainPage