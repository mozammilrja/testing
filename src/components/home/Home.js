import React,{} from "react";
import { Link } from "react-router-dom";
import './home.css'
import { Accordion, } from "react-bootstrap";
import Logo_1 from '../../assets/images/home/image-1.png'
import Logo_2 from '../../assets/images/home/image-2.png'
import Brick_1 from '../../assets/images/home/brick-1.png'
import Launch from '../../assets/images/home/launch.png'
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



<div className='row'>

<div className='joinus'>
<span className='bug-bounty-sub-heading'>Frequently Asked Questions</span>
</div>
    <div className="col-md-6 mt-3">
            <div className="acc-1">
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  Why should you opt for a bug bounty?
                  </Accordion.Header>
                  <Accordion.Body>
                  If you’re looking to add a layer of protection to your online assets, bug bounty programs are a great way. It is a crowdsourced penetration testing program that rewards for finding security bugs and ways to exploit them. For cybersecurity professionals, it is a great way to test their skills on a variety of targets and get paid well for the same.

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="acc-2">
              <Accordion defaultActiveKey="2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  Why to opt for a bug bounty program?
                  </Accordion.Header>
                  <Accordion.Body>
                  Using a bounty program is a cost-effective way to improve cybersecurity as you pay when bugs are submitted and validated. Rather than relying on a single security professional, bug bounty programs attract hackers with diverse backgrounds and varying degrees of experience to improve security. Having access to the global hacker community ensures that all assets in scope are tested thoroughly.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="acc-3">
              <Accordion defaultActiveKey="3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  Do you provide triaging services?               
                   </Accordion.Header>
                  <Accordion.Body>
                  The cost of a Smart Contract Audit varies with its type and complexity. Also, it depends on the level of documentation provided by the developer to understand the business logic implemented. You can get a quotation on our Pricing page by simply answering a few questions.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="acc-4">
              <Accordion defaultActiveKey="4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  Do you provide audits?
                   </Accordion.Header>
                  <Accordion.Body>
                  Yes. ImmuneBytes is a blockchain security firm and we provide all-around security to blockchain and DeFi projects. We have audited for 85+ blockchain startups and corporations, ranging from a variety of blockchain frameworks such as Ethereum, Tron, BSC, PolkaDot, EOS, and more.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="acc-5">
              <Accordion defaultActiveKey="5">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  Can we reduce the scope of the bounty?
                   </Accordion.Header>
                  <Accordion.Body>
                  It’s generally allowed, but we recommend against it as it reduces confidence in your program in the eyes of the hackers as they might be working on something, only to find out that it was just removed. If you plan to regularly add or remove assets, we would suggest having a grace period where hunters would still get rewarded for the vulnerabilities in those assets.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-md-6 mt-3">
            <div className="acc-1">
              
              <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  Can we add multiple scope in a program?
                  </Accordion.Header>
                  <Accordion.Body>
                  In the case of multiple products with different branding and/or wanting to have a different payout table, it is suggested that you have multiple bug bounty programs instead.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="acc-2">
              <Accordion defaultActiveKey="2">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  How are bug reports classified?
                  </Accordion.Header>
                  <Accordion.Body>
                  All the ImmuneBytes bug bounty programs use our Vulnerability Severity Classification System. Though we give full liberty to our clients to alter this system, we require that this be clarified before the launch of the bug bounty program so that it’s clear to the bounty hunters.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className="acc-3">
              <Accordion defaultActiveKey="3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  How do the rewards work?
                  </Accordion.Header>
                  <Accordion.Body>
                  Once you’ve discovered the bug, we confirm its validity with the client and work with them to fix and get you paid for your hard work.         
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="acc-4">
              <Accordion defaultActiveKey="4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  Can we launch bounty program while having an audit?
                  </Accordion.Header>
                  <Accordion.Body>
                  We would recommend against it as having a bug bounty program during an audit with a deadline. You may receive duplicate reports from the bug bounty program and the auditing firm. However, in the case of a live product, it may be a wise decision to have a bug bounty program running.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="acc-4">
              <Accordion defaultActiveKey="5">
                <Accordion.Item eventKey="0">
                  <Accordion.Header b>
                  What is BugBytes platform?
                    </Accordion.Header>
                  <Accordion.Body>
                  As a security firm, our job is to dissect the code for any bugs and keep hackers at bay. The most effective way to do this is via a Bug Bounty Program. We aim to bring together the projects and also look into things from the hacker's perspective to strengthen your smart contract. Running a bug bounty program is getting ahead of the game by being proactive and predictive. We plan to provide bug bounty hosting, consultation, bug triaging, and program management services to various projects seeking it.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          </div>
          
        </div>
    <div  className='stripe-input'  style={{ backgroundImage: `url(${Brick_1})`,backgroundRepeat:'no-repeat'}}>
<div className='container '>
  <div className='row'>
  <div className='col-md-6'>
    <p className='text-xl mt-4 text-[#f1c40f]'>web bug bounty plateform to get rid of vulnerabilities befor</p>
    </div>
    <div className='col-md-6'>
    <form className='py-4 relative'>
    <input className='backg'
            type="email"
            class="w-full p-2  text-lg"
            placeholder="Enter email"
          />
      <span class="absolute inset-y-0 inline-flex items-center right-0">
           <img src={Launch} alt="" />
          </span>
    </form>
    </div>
    </div>
  </div>
</div>
  </section>
    </>
  )
}

export default Home