import React, {  } from "react";
import { Link } from "react-router-dom";
import './header.css'
import Brand from '../../assets/images/home/logo.png'
import Nav_1 from '../../assets/images/home/nav-1.png'
import Nav_2 from '../../assets/images/home/nav-2.png'




const Header = () => {

  // const [show, setShow] = useState(false);

//   const showDropdown = (e)=>{
//     setShow(!show);
// }
// const hideDropdown = (e) => {
//     setShow(false);
// }


 // eslint-disable-next-line
  return (
    <>
    
    <header class="container">
  <div class="max-w-screen-xl px-4 pt-6   sm:px-6 lg:px-8 header-title">
    <div class="flex items-center justify-between h-16">
      <div class="md:flex md:items-center">
        <Link class=" text-teal-600" to="/">
           <img src ={Brand} style={{maxWidth:"50%"}} alt="" />
        </Link>
      </div>
      <div class="hidden md:block">
        <nav aria-labelledby="header-navigation">
          <h2 class="sr-only" id="header-navigation">Header navigation</h2>

          <ul class="flex items-center gap-6 text-[15px] pt-3">
            <li>
              <Link 
                class="home"
                to="/"
              >
                HOME
              </Link>
            </li>

            {/* <li>
              <Link
                class="learn"
                to="/"
              >
                PROGRAMS
              </Link>
            </li> */}
                {/* <NavDropdown title="LEARN MORE"  className="drop-down font-bold"
                 show={show}
                 onMouseEnter={showDropdown} 
                 onMouseLeave={hideDropdown}
                 >
                    <div className=" link-text">
                      <Dropdown.Item><Link to="/"  >Bug</Link></Dropdown.Item>
                      <Dropdown.Item><Link to="/"  >Bug</Link></Dropdown.Item>
                    </div>
                </NavDropdown> */}
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:gap-4 sm:flex">
          <a 
            class="px-2 py-2.5 text-sm font-bold text-white"
            href="/"
          >
           <img src= {Nav_1}  alt=""/>
          </a>

          <div class="hidden sm:flex">
            <a 
               class="px-2 py-2.5 text-sm font-bold text-white "
              href="/"
            >
           <img src= {Nav_2} alt="" />
            </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button
            class="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>


    
    </>
  )
}

export default Header