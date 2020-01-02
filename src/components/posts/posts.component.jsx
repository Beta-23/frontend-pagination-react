import React from 'react';
import { ReactComponent as YourSvg } from '../../assets/Infinity-1s-200px.svg';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h5><YourSvg/>Loading...</h5>
    }

    return <ul className="list-group mb-4">
        {posts.map(post => (
            <li key={posts.id} className="list-group-item">
                {post.title}
            </li>
        ))}
    </ul>
};

export default Posts;