import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './FeedListing.css';
import { getPosts, deletePost, updateId } from '../../store/slices/feedSlice';

function FeedListing() {
  const posts = useSelector((store) => store.feedSlice.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleEdit = (id) => {
    dispatch(updateId(id));
  };

  return (
    <div className="feed-listing">
      {posts.length === 0 ? (
        <p className="no-posts">No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-description">{post.description}</p>
            {post.imageURL && (
              <img src={post.imageURL} alt={post.title} className="post-image" />
            )}
            <p className="post-date">{new Date(post.createAt).toLocaleString()}</p>
            <div className="post-actions">
              <button className="btnn btn-edit" onClick={() => handleEdit(post.id)}>Edit</button>
              <button className="btnn btn-delete" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedListing;
