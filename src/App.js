import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import BlogsPage from './Pages/BlogsPage'
import SingleBlogPage from './Pages/SingleBlogPage';
import PostsPage from './Pages/PostsPage';
import SinglePostPage from './Pages/SinglePostPage';
import CreatePostPage from './Pages/CreatePostPage';

function App() {
  const data = JSON.parse(localStorage.getItem('Blogs'))
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<PostsPage />} />
          <Route exact path='/postdetails' element={<SinglePostPage />} />
          <Route exact path='/createpost' element={<CreatePostPage />} />
          <Route exact path='/myblog' element={<BlogsPage data={data} />} />
          <Route exact path='/myblogdetails' element={<SingleBlogPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
