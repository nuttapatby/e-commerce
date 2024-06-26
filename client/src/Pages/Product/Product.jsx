import React, { useState } from 'react'
import './Product.scss'
import useFetch from '../../Hooks/useFetch';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("image");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();


  const {data,loading, error} = useFetch(
    `/products/${id}?populate=*`
  );

  return (
    <div className='product'>
      {loading ? ("loading") : (
      <>
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image?.data?.attributes?.url} alt="" onClick={(e)=>setSelectedImg("image")} />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image2?.data?.attributes?.url} alt="" onClick={(e)=> setSelectedImg("image2")} />
          {/* <img src={images[2]} alt="" onClick={(e)=> setSelectedImg(2)} /> */}
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>

        <button className='add' onClick={()=>dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          image: data.attributes.image.data.attributes.url,
          quantity,
        }))}>
          <AddShoppingCartOutlinedIcon /> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderOutlinedIcon /> ADD TO WISH LIST
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Mens, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFOMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
      </>
    )}
    </div>
  )
}

export default Product