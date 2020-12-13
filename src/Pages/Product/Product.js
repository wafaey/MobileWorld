import React, { useState } from 'react';
import './Product.scss';
import SimpleImageSlider from "react-simple-image-slider";
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import index from '../../Actions/index'
export default function Product() {
    const dispatch = useDispatch();
    let { push } = useHistory();
    const product = useSelector( state => ({ product:state.selectedProduct}) ); 
    const addProductCart = (product)=>{
        console.log(product);
        dispatch(index.setCart({product}));
      }
      const addProductToCompare = (product)=>{
        dispatch(index.setCompare({product}));
      }
	return (
            <div className='head'>
            <div className='mobile-image'>
            <SimpleImageSlider
                    width={1124}
                    height={650}
                    images={[require('../../Components/Assets/'+ product.product.product.image),require('../../Components/Assets/'+ product.product.product.image)]}
                />
            {/* <img  src= alt="Paris" class="center"></img> */}
            </div>
            <div className='up'>
            <div className='mobile-details'>
             <h2>Model : {product.product ? product.product.product.name : ''}</h2>
             <p>Company : {product.product ? product.product.product.brand : ''}</p>
             <p> Color : {product.product ? product.product.product.color :''}</p>
             <p>Release Date : {product.product ? product.product.product.date :''}</p>
             <p>Dimention : {product.product ? product.product.product.height + '*' + product.product.product.width  : ''}</p>
             <p>Weigth : {product.product ? product.product.product.weight : ''}</p>
             <div className='product-option'>
             <Button variant="contained" color="primary" onClick={()=>addProductCart(product.product.product)}>
             Add To Cart
             </Button>
             <Button variant="contained" color="primary" onClick={()=>addProductToCompare(product.product.product)}>
             Compare
             </Button>
             <Button variant="contained" color="primary" onClick={()=>push('/')}>
             Home
             </Button>
             </div>
            </div>
            </div>
            </div>
	)
}

