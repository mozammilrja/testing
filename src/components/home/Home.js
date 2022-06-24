import React,{} from "react";
import './home.css'


const Home = () => {
  return (
    <div>
    <section class="text-[#01fdf0] body-font text-center">
    <h1 className='text-center text-yellow-500'>Homes Page</h1>
    <div class="container px-5 py-24 mx-auto">
    <h1 className='bug-bounty-heading'>WEB 3.0 BUG BOUNTY PLATFORM</h1>
    <h3 className='bug-bounty-sub-heading'>Secure, Transparent, Rewarding!</h3>
   </div>
   <Link className="py-3 mt-20  text-sm font-medium text-red"
    style={{ backgroundImage: `url(${Program_button})`,backgroundRepeat:'no-repeat' ,padding:'0 3%'}} 
          type="submit">
          <span className='text-[#000]'>LAUNCHING SOON</span>
      </Link>
    </section>
    </div>
  )
}

export default Home