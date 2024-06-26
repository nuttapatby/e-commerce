import React, {useState, useEffect} from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Cart from '../Cart/Cart';


const Navbar = () => {

  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products)

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });

  return (
    <div className={`navbar ${scroll ? "sticky" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <Link className='link' to={'/'}>LOGO</Link>
        </div>

        <div className="center">
          <div className="item">
            <Link className='link' to={'/'}>Home</Link>
          </div>
          <div className="item">
            <Link className='link' to={'/products/1'}>Shop</Link>
          </div>
          <div className="item">
            <Link className='link' to={'/'}>About</Link>
          </div>
          <div className="item">
            <Link className='link' to={'/'}>Contact</Link>
          </div>
        </div>

        <div className="right">
          <div className="icons">
            <PersonOutlinedIcon/>
            <SearchOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar