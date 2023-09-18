import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className="container ">
        <div className="grid grid-cols-12 gap-40 my-10 ">
          <div className="col-span-2">
            <img src="./assets/img/Group 22.png" alt="" />
          </div>
          <div className="col-span-2">
            <p className='text-[#253D4E] text-[24px] font-[500]'>Account</p>
            <ul className=''>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Wishlist</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Cart</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Track Order</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Shipping Details</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className='text-[#253D4E]  text-[24px] font-[500]'>Useful links</p>
          <ul className=''>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Useful links</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Conact</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Hot deals</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Promotions</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>New products</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <p className='text-[#253D4E] text-[24px] font-[500]'>New products</p>
          <ul className=''>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Payments</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Refund</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Checkout</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Shipping</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Q&A</Link></li>
              <li><Link className='text-[#253D4E] leading-8 text-[16px] font-[500]'>Privacy Policy</Link></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
