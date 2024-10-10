import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, updateCard } from '../../store/slices/productSlice';
import * as Yup from 'yup';
import './form.css' // or './Form.module.css' if using CSS Modules

function Form({editProduct, setEditProduct}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();


  useEffect(() => {
    if (editProduct) {
      setTitle(editProduct.title || "")
      setDescription(editProduct.description || "")
      setImage(editProduct.image || "")
    } else {
      setTitle('')
      setDescription('')
      setImage('')
    }
  } , [editProduct])

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(3, 'Title must be at least 3 characters long'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters long'),
    image: Yup.string()
      .url('Image must be a valid URL')
      .required('Image URL is required'),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        { title, description, image },
        { abortEarly: false }
      );

      setErrors({});
      return true;
    } catch (error) {
      const validationError = {};
      error.inner.forEach((err) => {
        validationError[err.path] = err.message;
      });
      setErrors(validationError);
      return false;
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();
    if (!isValid) {
      return;
    }

    if (editProduct) {
      dispatch(updateCard({id: editProduct.id, title, description, image}))
      setEditProduct(null)
    } else { 
    const newProduct = {
      title,
      description,
      image,
    };
    dispatch(addCard(newProduct));
    setTitle('');
    setDescription('');
    setImage('');
  }
  };

  return (
    <div className="formContainer">
      <h2 className="formHeading">Add Product</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="formGroup">
          <label className="formLabel" htmlFor="title">Title</label>
          <input className="formInput" id="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          {errors.title && <span className="errorMessage">{errors.title}</span>}
        </div>
        <div className="formGroup">
          <label className="formLabel" htmlFor="description">Description</label>
          <input className="formInput" id="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          {errors.description && <span className="errorMessage">{errors.description}</span>}
        </div>
        <div className="formGroup">
          <label className="formLabel" htmlFor="image">Image Url</label>
          <input className="formInput" id="image" type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
          {errors.image && <span className="errorMessage">{errors.image}</span>}
        </div>
        <button className="submitButton" type="submit">{editProduct ? "Update Product" : "Add Product"}</button>
      </form>
    </div>
  );
}

export default Form;
