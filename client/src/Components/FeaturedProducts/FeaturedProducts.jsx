import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
import useFetch from '../../Hooks/useFetch'


const FeaturedProducts = ({type}) => {

   const {data, loading, error} = useFetch(`products?populate=*&[filters][type][$eq]=${type}`)

  return (
    <div className='featuredproducts'>
        <div className="top">
            <h2> {type} Product</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odit? Sit temporibus nulla cumque ducimus, explicabo, fuga earum maxime totam, dolor sint ullam! Soluta id sequi consectetur numquam ratione dolor commodi reiciendis officia, placeat eos culpa et maxime. Eaque perspiciatis praesentium vel error hic maxime deserunt ad sint fuga illum.</p>
        </div>
        <div className="bottom">
            {error 
                ? "Something went wrong" 
                : loading 
                ? "loading" 
                : data.map((item) => <Card item={item} key={item.id} />
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts;