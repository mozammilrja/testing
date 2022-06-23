import React from 'react'
import "./footer.css"
import Brand from '../../assets/images/home/logo.png'
import Imm from '../../assets/images/home/footer-logo.png'
import { AiOutlineReddit } from "react-icons/ai";
import { FaRedditAlien } from "react-icons/fa";
import {
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa/";
import { ImTwitter,ImReddit } from "react-icons/im";



const Footer = () => {
  return (
    <>
 
<footer class="container pt-10">
<div class=" text-center">
<div className='img-fluid center-block brand-logo'>

  <img className='py-10' src={Brand} style={{maxWidth:"20%"}}  />
  <h5 class="text-white font-sm">
Powered by
</h5>
<img className='' src={Imm} style={{maxWidth:"20%",paddingBottom:'25px'}}  />
  </div>



<p class="footer-paragraph">
Partner up with DeFi’s greatest minds. Join BugBytes Bounty Platform today to save yourself from the nightmare that hacking is.
</p>

<div className='row pt-5'>
  <div className='col-md-12 '>
<ul  className='icon-footer '>
<li>
      <FaDiscord color='#fff' size='10%'/>
    </li>
   
    <li>
      <FaTelegramPlane color='#fff' size='10%'/>
    </li>
    <li>
      <ImTwitter color='#fff' size='10%'/>
    </li>
    <li>
      <FaRedditAlien color='#fff' size='10%'/>
    </li>
</ul>
  </div>
</div>

</div>
  <div class="py-16  sm:px-6 lg:px-8">
  <div class="grid grid-cols-5 divide-x border-color: rgb(107 114 128)">
  <div> <p class="text-xs text-center text-white lg:text-center">
 AOUT US
</p>
</div>
  <div> <p class="text-xs text-center text-white lg:text-center">
EXPLORE
</p></div>
  <div> <p class="text-xs text-center text-white lg:text-center">
NEWS AND BLOGS
  </p></div>
  <div> <p class="text-xs text-center text-white lg:text-center">
OUR PARTNER
  </p></div>
  <div> <p class="text-xs text-center text-white lg:text-center">
CONTACT US
  </p></div>
</div>
    <div class="pt-8 mt-12 border-t border-white/20">
      <div class="">
        <p class="text-xs text-center text-white lg:text-center">
           &copy; 2022. IMMUNEBYTES,ALL RIGHT RESERVED.
        </p>
      </div>
    </div>
  </div>
</footer>
    
    </>
  )
}

export default Footer