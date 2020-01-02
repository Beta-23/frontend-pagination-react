import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/posts/posts.component';
import Pagination from './components/pagination/pagination.component';
import './App.css';

const App = () => {
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  // getCurrent Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNuber) => setCurrentPage(pageNuber);

  // Test json data is hitting
  // console.log(posts);
  return (
    <div className='container mt-5'>
      <h1 className="text-primary-mb-3">Blog Posts!</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination 
          postPerPage={postsPerPage} 
          totalPosts={posts.length} 
          paginate={paginate} 
        />
    </div>
  );
};

export default App;
