import React, { useState } from 'react'
import './Products.scss'
import List from '../../Components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'

const Products = () => {

  const catId =  parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sort, setSort] = useState('asc');
  const [selectedSubcatagories, setSelectedSubcatagories] = useState([]);

  const {data,loading,error} = useFetch(`/sub-catagories?[filters][catagories][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubcatagories(isChecked 
      ? [...selectedSubcatagories, value] 
      : selectedSubcatagories.filter((item) => item !== value))
  };


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Catagories</h2>
          {data?.map(item => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor="1">{item.attributes.title}</label>
            </div>
          ))}
          
        </div>
        <div className="filterItem">
          <h2>Fillter Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={1} max={10000} onChange={(e)=>setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value={'asc'} name='price' onChange={(e)=>setSort('asc')}  />
            <label htmlFor="asc">Price (Lower first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value={'desc'} name='price' onChange={(e)=>setSort('desc')}  />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>


      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubcatagories} />
      </div>
    </div>
  )
}

export default Products