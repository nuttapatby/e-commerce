import React from 'react'
import './Catagories.scss'
import { Link } from 'react-router-dom'

const Catagories = () => {
  return (
    <div className='catagories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to={'/products/0'}>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to={'/products/2'}>Sale</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            {/* <div className="row">
                <div className="col"> r3</div>
            </div> */}
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/2072453/pexels-photo-2072453.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                        <button>
                            <Link className='link' to={'/products/1'}>Sale</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <button>
                            <Link className='link' to={'/products/1'}>Sale</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                 <img src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <button>
                    <Link className='link' to={'/products/1'}>Sale</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Catagories