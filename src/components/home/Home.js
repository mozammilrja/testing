import React,{} from "react";
import { Link } from "react-router-dom";
import './home.css'
import Logo_1 from '../../assets/images/home/image-1.png'
import Logo_2 from '../../assets/images/home/image-2.png'
import Buttons_img from '../../assets/images/home/buttons.png'
import Program_button from '../../assets/images//home//button-landing.png'



const Home = () => {

  
  return (
    <>
    <section class="text-[#01fdf0] body-font text-center">
   
    <div class="container px-5 py-24 mx-auto">

    <h1 className='bug-bounty-heading'>WEB 3.0 BUG BOUNTY PLATFORM</h1>

<h3 className='bug-bounty-sub-heading'>Secure, Transparent, Rewarding!</h3>

<p className='text-xl pt-4  text-[#f1c40f]' style={{padding:'0 10%'}}>Bug Bounty Platform to get rid of vulnerabilities before anyone even knows they exist.</p>

<p  className='text-base pt-4 text-[#f1c40f]'>
Cybercrime is relentless and unlikely to stop. With our Bug Bounty Platform get yourself a professional triage team, ongoing crowdsourced security programs, the whitehat army, a secure dashboard, and more for your DeFi and crypto projects
  </p>
    
<Link className="py-3 mt-20  text-sm font-medium text-red"
style={{ backgroundImage: `url(${Program_button})`,backgroundRepeat:'no-repeat' ,padding:'0 3%'}} 
          type="submit">
          <span className='text-[#000]'>LAUNCHING SOON</span>
        </Link>


<div className='joinus' style={{marginTop:'5%'}}>
<span className='bug-bounty-sub-heading'>JOIN US</span>
</div>
      


 </div>

  </section>
    </>
  )
}

export default Home