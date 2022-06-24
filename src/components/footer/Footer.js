import React from 'react'
import "./footer.css"
import Brand from '../../assets/images/home/logo.png'
import Imm from '../../assets/images/home/footer-logo.png'
import Bricks from '../../assets/images/home/brick-2.png'

import { FaRedditAlien } from "react-icons/fa";
import {
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa/";
import { ImTwitter} from "react-icons/im";



const Footer = () => {
  return (
    <>
 
<footer class="container">
<div class=" text-center">
<div class="mx-auto mt-16">
  <div><img src={Bricks} alt="" /></div>
</div>
<div className='img-fluid center-block brand-logo'>
  <img className='py-10' src={Brand} style={{maxWidth:"20%"}}  alt="" />
  <h5 class="text-white font-sm">
Powered by
</h5>
<img className='' src={Imm} style={{maxWidth:"20%",paddingBottom:'25px'}}  alt=""/>
  </div>



<p class="footer-paragraph">
Partner up with DeFi’s greatest minds. Join BugBytes Bounty Platform today to save yourself from the nightmare that hacking is.
</p>



<div class="flex items-center justify-center h-16 py-16">
    <ul class="flex items-center gap-5 text-sm">
            <li>
              <a class="text-white transition hover:text-white/75" href="/">
             < FaDiscord color='#fff' size='40px'/>
              </a>
            </li>

            <li>
              <a class="text-white transition hover:text-white/75" href="/">
              < FaTelegramPlane color='#fff' size='40px' />
              </a>
            </li>

            <li>
              <a class="text-white transition hover:text-white/75" href="/">
              < ImTwitter color='#fff' size='40px'/>
              </a>
            </li>

            <li>
              <a class="text-white transition hover:text-white/75" href="/">
              < FaRedditAlien color='#fff' size='40px' />
              </a>
            </li>

          </ul>

      
    </div>


</div>
  <div class=" sm:px-6 lg:px-8">
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
    <div class="pt-3 mt-12 border-t border-white/20">
        <p class="text-xs text-center text-white lg:text-center">
           &copy; 2022. IMMUNEBYTES,ALL RIGHT RESERVED.
        </p>
    </div>
  </div>
</footer>
    
    </>
  )
}

export default Footer