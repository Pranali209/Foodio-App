import React from 'react'
import { Button,  Heading, Img, Text, Input,  } from "components";
import { useNavigate } from 'react-router-dom';
import  authService  from 'Appwrite/Auth/Auth';
import { useDispatch } from 'react-redux';
import { setLoggedIn} from 'Store/LoginSlice';
function OrderPlaced() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
   async function handleLogOut(params) {
        await authService.logout()
        dispatch(setLoggedIn(false))
         navigate('/login')
        
    }
  return (
    <div className=' w-screen h-screen p-28  bg-gradient-to-r from-red-400 ... md:w-fit h-fit'>
        <div className=' h-[30rem] w-[52rem] bg-white-A700 m-auto  rounded-[30px] md:w-[20rem] h-[30rem]'>
             <Img src='images\Op2.png' className= " h-[20rem] w-[18rem] mx-auto md: w-[10rem] h-[12rem] "/>
             <hr/>
              <Heading size='xl' as="h3" className=' text-green-700 text-center m-2 md:text-lg'> Order Placed Suceessfully</Heading>
              <div className='flex justify-evenly w-[25rem] mx-auto p-4 md:flex-col  w-fit '>
                <Button  size="xl" className=" p-1 mb-4 " onClick = { () => navigate('/menu')}> Go back  </Button>
                <Button  size="xl" className=" p-1 mb-4 " onClick = { handleLogOut}> LogOut  </Button>
              </div>
              
        </div>
    </div>
  )
}

export default OrderPlaced