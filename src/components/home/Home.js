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
        <div className='row pt-10'>
          <div className='col-md-6 ' style={{borderRight:'5px solid gray'}}>      
          <img className='img-fluid hacker-img ' src={Logo_1} alt="" />
          <div>
            <h1  className='text-[30px]'>For hackers</h1>
            <p className='text-xl text-[#f1c40f]'>web bug bounty plateform to get rid of vulnerabilities befor anyone even knows they exist.</p>
            <Link  to="/hacker-form"  style={{ backgroundImage: `url(${Buttons_img})`,padding:"0 26px",backgroundRepeat:'no-repeat'}} className="py-3 text-sm font-medium"
          type="submit">
          <span className='text-[#000]'>SIGN UP</span>
         
        </Link>
          </div>
        </div>
          <div className='col-md-6'>
          <img className='img-fluid hacker-img' src={Logo_2} alt="" />
          <div>
            <h1 className='text-[30px]'>For projects</h1>
            <p className='text-xl text-[#f1c40f]'>web bug bounty plateform to get rid of vulnerabilities befor anyone even knows they exist.</p>
            <Link to="/signup"   style={{ backgroundImage: `url(${Buttons_img})`,backgroundRepeat:'no-repeat'}} className="px-3 py-3 text-sm font-medium"
          type="submit">
          <span className='text-[#000]'> LEARN HOW</span>
        </Link>
          </div>
          </div>
        </div>

        <div className='col-md-12 pt-20'>
    <h3 className='bug-bounty-sub-heading'>bug bounty and  web 3.0 </h3>
    <p  className='text-lg px-4 text-[#f1c40f]'>
    The Web3 security revolution, this new paradigm shift in information security is so significant that it deserves newer more advanced methods of security. Traditional website and app bug bounty platforms have been successful in the old-world model but there is a massive difference between the existing bug bounties and the new era of Web 3.0 bugs associated with blockchains and crypto.
      </p>
    <p  className='text-lg px-4 text-[#f1c40f]'>
    In the era of Decentralised Finance, Web 3.0 bug bounties take on the critical nature of being associated with actual monetary value, not just software bugs. With DeFi, billions of dollars in user funds are locked in smart contracts, visible and accessible to all. The stakes are pretty high!
      </p>
    <p  className='text-lg px-4 text-[#f1c40f]'>
    Vulnerabilities in code represent a possibility of a direct loss of users’ money. Bug bounty programs are open invitations to security researchers to find those vulnerabilities in exchange for a reward. Secure smart contracts, save funds, and get paid doing it!
      </p>
    </div>
 </div>

  </section>
    </>
  )
}

export default Home