import React,{} from "react";
import { Link } from "react-router-dom";
import './home.css'
import Logo_1 from '../../assets/images/home/image-1.png'
import Logo_2 from '../../assets/images/home/image-2.png'
import Buttons_img from '../../assets/images/home/buttons.png'


const Home = () => {
  return (
    <div>
    <section class="text-[#01fdf0] body-font text-center">
    <h1 className='text-center text-yellow-500'>Homes Page</h1>
    <div class="container px-5 py-24 mx-auto">
    <h1 className='bug-bounty-heading'>WEB 3.0 BUG BOUNTY PLATFORM</h1>
    <h3 className='bug-bounty-sub-heading'>Secure, Transparent, Rewarding!</h3>
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
    </section>
    </div>
  )
}

export default Home