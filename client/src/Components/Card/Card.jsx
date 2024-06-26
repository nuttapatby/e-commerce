import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'



const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className="card">
            <div className="image">
                <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.image?.data?.attributes?.url} alt="" className='mainImg' />
                {/* <img src={item.img2} alt="" className='secondImg' /> */}
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className="prices">
                <h3>${item.oldPrice || item?.attributes.price + 100}</h3>
                <h3>${item?.attributes.price}</h3>
            </div>
        
        </div>
    </Link>
  )
}

export default Card