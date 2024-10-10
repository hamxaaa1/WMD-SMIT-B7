// CardComponent.js
import React from 'react';
import './card.css'
import { deleteCard } from '../../store/slices/productSlice';
import {useDispatch} from 'react-redux'

const CardComponent = (props) => {
  const dispatch = useDispatch();
  const {setEditProduct} = props
  console.log(setEditProduct)

  return (
    <div className="card" style={{ width: '18rem', }}>
      <img style={{width: 230, paddingLeft: 30}} src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <br />
        <button style={{marginTop: 30, marginRight: 20}} type="button" onClick={() => setEditProduct(props)} class="btn btn-success">Update</button>
        <button onClick={() => dispatch(deleteCard(props.id))} style={{marginTop: 30}} type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default CardComponent;
