import React from 'react'
import './Home.scss'
import Slider from '../../Components/Slider/Slider'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Catagories from '../../Components/Catagories/Catagories'
import Contact from '../../Components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured" />
      <Catagories />
      <FeaturedProducts type="tranding" />
      <Contact />
    </div>
  )
}

export default Home