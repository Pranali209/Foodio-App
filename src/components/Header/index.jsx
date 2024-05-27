import React from "react";
import { Button, Text, Img } from "./..";
import { Link, useNavigate , useLocation} from "react-router-dom";

import { useSelector } from "react-redux";


export default function Header() {

  const  navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname);
  const  LoggedIn = useSelector((state) => state.login.LoggedIn.loggedIn) 
  

  
  function handleLogin(params) {
    if( LoggedIn  == true) {
      navigate('/checkout')
       
    }
    else{
      navigate('/signup')
    }
  
  }
  return (
    <header  className="flex items-center justify-between gap-5 md:flex-col" >
      <Img src="images/img_header_logo.svg" alt="headerlogo" className="h-[51px] w-[11%] md:w-full" />
      <ul className="!mt-[9px] flex w-[51%] items-center justify-center gap-[27px] self-start md:w-full sm:flex-col">
        <li>
         <Link to= '/homepage'>
            <div className="flex self-start">
              <Text size="md" as="p"  
              className={`cursor-pointer !font-opensans  hover:!text-red-400 ${ location.pathname === '/homepage' || location.pathname === '/' ? ' !text-orange-400' : '!text-black-900' 
              }`}>
                Home
              </Text>
            </div>
         </Link>
        </li>
        <li>
         <Link to='/menu'>
            <div className="flex self-start">
              <Text size="md" as="p" className= {`cursor-pointer !font-opensans  hover:!text-red-400  ${location.pathname === '/menu' ? '  !text-orange-400':'!text-black-900'}  `}>
                Menu
              </Text>
            </div>
        </Link>
        </li>
        <li>
          <Link to="/aboutus">
            <div className="flex self-start">
              <Text size="md" as="p" className= {`cursor-pointer !font-opensans  hover:!text-red-400  ${location.pathname === '/aboutus'?'  !text-orange-400':'!text-black-900'}`}>
                About us
              </Text>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/orderonline'>
            <div className="flex flex-1 flex-col items-start gap-1 sm:self-stretch">
              <Text size="md" as="p" className= {`cursor-pointer !font-opensans  hover:!text-red-400 ${location.pathname === '/orderonline' || location.pathname === '/checkout' ? '  !text-orange-400':'!text-black-900'} `}>
                Order online
              </Text>
              
            </div>
         </Link>
        </li>
        <li>
          <Link to="/reservation">
            <div className="flex self-start">
              <Text size="md" as="p" className= {`cursor-pointer !font-opensans  hover:!text-red-400 ${location.pathname === '/reservation' ? '  !text-orange-400':'!text-black-900'} `}>
                Reservation
              </Text>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <div className="flex self-start">
              <Text size="md" as="p" className= {`cursor-pointer !font-opensans  hover:!text-red-400 ${location.pathname === '/contact' ? ' !text-orange-400':'!text-black-900'} `}>
                Contact us
              </Text>
            </div>
          </Link>
        </li>
      </ul>
      <div className="flex gap-[25px]">
        <Button size="lg" shape="circle" className="min-w-[50px] !rounded-[25px]" onClick = {()=> navigate('/orderonline')}
        rightIcon={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className=" h-6 w-5">
           <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
        }>
      
           </Button>
        <Button size="md" shape="round" className="min-w-[112px] font-semibold sm:px-5 bg-red-400" 
        onClick = {handleLogin}>
           {LoggedIn == true ? "Checkout" : "Sign up" }
        </Button>
      </div>
    </header>
  );
}
