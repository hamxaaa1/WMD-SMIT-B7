import React, { useEffect, useState } from 'react';
import './CreatePost.css';
import { createPost, updatePost } from '../../store/slices/feedSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebase';

function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();  
  const checkPost = useSelector(store => store.feedSlice.updatePost);
  const imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtB03MIHCtTIN0-0apy8LCvf7T7C04FI-OfA&s";

  useEffect(() => {
    if (checkPost) {
      setTitle(checkPost.title);
      setDescription(checkPost.description);
      setImage(checkPost.imageURL);
    } else {
      setTitle('');
      setDescription('');
      setImage('');
    }
  }, [checkPost]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let imageUrl = '';

    if (file) {
      const fileRef = ref(storage, `Images/${Date.now()}_${file.name}`);
      const metadata = {
        contentType: file.type,
      };

      try {
        await uploadBytes(fileRef, file, metadata);
        imageUrl = await getDownloadURL(fileRef);
        console.log('Image uploaded successfully:', imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
        return; // Prevent further execution if upload fails
      }
    }

    const post = {
      title,
      description,
      createAt: new Date(),
      imageURL: imageUrl, // Use the uploaded image URL
    };

    if (checkPost) {
      dispatch(updatePost({ id: checkPost.id, ...post }));
    } else { 
      dispatch(createPost(post));
    }
  };

  const changeImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      updateImage(selectedFile);
    }
  };

  const updateImage = async (file) => {
    try {
      const fileRef = ref(storage, `Images/${Date.now()}_${file.name}`);
      const metadata = {
        contentType: file.type,
      };
      await uploadBytes(fileRef, file, metadata);
      const url = await getDownloadURL(fileRef);
      setImage(url);
      console.log('Image uploaded successfully:', url);
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <img src={imgUrl} alt="User Avatar" className="avatar" />
        <form className="post-form" onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="form-control mb-2"
            rows="3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="file"
            className="form-control mb-2"
            onChange={changeImage}
            required
          />
          <button className="btn btn-primary mt-2" type="submit">
            {checkPost ? "Edit Post" : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
