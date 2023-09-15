import Layout from "src/Layout";
import { LoginPage, MainPage, PostDetailPage, PostEditPage, PostNewPage, PostPage, ProfilePage, SignUpPage } from "@pages/index";
import { Navigate, createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([{
	path: '/',
	element: <Layout />,
	children: [{
		index: true,
		element:<MainPage/>,
	},
		{
			path: 'login',
			element:<LoginPage/>
		},
		{
			path: 'signup',
			element:<SignUpPage/>
		},
		{
			path: 'profile',
			element:<ProfilePage/>
		},
		{
			path: 'posts',
			element:<PostPage/>
		},
		{
			path: 'posts/new',
			element:<PostNewPage/>
		},
		{
			path: 'posts/:postId',
			element:<PostDetailPage/>
		},
		{
			path: 'posts/edit/:postId',
			element:<PostEditPage/>
		},
		{
			path: '*',
			element: <Navigate replace to='/'/>
		}
	]
}
])

export default Router