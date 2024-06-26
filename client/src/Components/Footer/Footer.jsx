import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Catagory</h1>
          <span>Mens</span>
          <span>Womens</span>
          <span>Kids</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Store</span>
          <span>Term & Conditions</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime tempora, quas minus non, nostrum sint consequatur voluptate laboriosam iusto ipsa minima accusantium maiores molestias ipsam alias. Ratione modi cumque accusantium, vitae mollitia nesciunt tenetur quae neque eius nulla similique, debitis laboriosam. Molestiae earum impedit animi aperiam sed debitis vitae pariatur?</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At reiciendis in, sapiente rerum quod, voluptatem hic tenetur officiis iste maiores id sit nemo ea fuga suscipit. Pariatur eum maxime ipsum obcaecati, laboriosam vitae velit id soluta. Omnis pariatur cupiditate dolore.</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="logo">LOGO</div>
          <div className="copyright">Copyright 2024 &copy; All Right Reserved</div>
        </div>
        <div className="right">
          <div className="image">
            <img src="/Image/stripe-secure-payments.png" alt="Stripe logo" />
            <img src="/Image/visa.svg" alt="Visa logo" />
            <img src="/Image/mastercard.svg" alt="Mastercard logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer