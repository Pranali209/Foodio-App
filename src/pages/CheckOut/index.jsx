import { Button, Footer, Header, Heading, Img, Text, Input, TextArea } from "components";

import React, { useState } from "react";
import { Helmet } from 'react-helmet'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "Store/Slice";
import { useDispatch } from "react-redux";
export default function checkout() {
  const dispatch = useDispatch()
 const loggedIn = useSelector((state)=> state.login.LoggedIn.loggedIn)
 const cart = useSelector(state => state.cart.product)

 const navigate = useNavigate()

  function HandleOrderNow(e) {
    e.preventDefault()

    if(loggedIn)
      {
        if(cart.length > 0 )
          {
            
            
            if(e.target.FirstName.value && e.target.Address.value &&  e.target.LastName.value &&  e.target.Email.value  &&  e.target.Phone.value  &&  e.target.radio_id.value == "on")
              {
             
                alert("Order placed SuccessFully")
                dispatch(clearCart())
                
                navigate("/orderplaced")
                      
              }
              else{
                alert("Please fill all the feilds")
              }
              
          }
          else{
            alert("Please add some products to cart")
            navigate('/menu')
          }
     
      }
      else{
        alert("Please Login to place order")
        navigate('/signup')
      }

  }
  return (
    <>
      <Helmet>
        <title>Foodio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className=" w-full bg-gray-50 pt-[51px] md:pt-5">
        <div className=" flex-col items-center gap-[105px] md:gap-[78px] sm:gap-[52px]">
          <div className="container-xs flex flex-col gap-[102px] md:gap-[76px] md:p-5 sm:gap-[51px]">
            <Header className="underline decoration-red-400  !text-red-400" />
          </div>
          <div className="w-[87%] flex items-start justify-between gap-5 md:w-full md:flex-col" >
            <div className=" mt-[5.5rem] mx-[40px]">
              <svg xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-4 cursor-pointer"
                viewBox="0 0 320 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </div>
            <div className="h-[960px] w-[85%] mt-[5.5rem]  rounded-[30px] shadow-xl bg-white-A700_7f px-[45px] pb-[46px pt-[45px] md:h-auto md:w-full md:p-5" >
              <form onSubmit = {(e) => HandleOrderNow(e)} className="flex flex-col items-center gap-7">
                <Heading as="h1" size="3xl">Checkout</Heading>
                <div className="flex flex-col items-start gap-2 self-stretch" >
                  <Text size="xl" as="p" className="text-gray-800"> Shipping address</Text>
                  <div class="flex gap-4 self-stretch md:flex-col" >
                    <Input
                      name="Address"
                      placeholder={`8502 barker street New york`}
                      className=" flex-grow border border-solid border-gray-400 !text-gray-900 rounded-md sm:pr-5" />
                    <Button size="xl" className="min-w-[166px] rounded-lg sm:px-5">
                      Change
                    </Button>
                  </div>
                </div>
                <div  className="flex flex-col gap-[30px] self-stretch ">
                  <div class="flex flex-col gap-[11px] items-start" >
                    <Text size="lg" as="p" className="!text-gray-800">Order data</Text>
                    <div class="flex flex-col gap-6 self-stretch " >
                      <div class="flex  gap-4 md:flex-col " >
                        <Input
                          type="text"
                          name="FirstName"
                          placeholder={`First name`}
                          className=" w-full border border-solid border-gray-400 !text-gray-900 rounded-md sm:pr-5" />
                        <Input
                          type="text"
                          name="LastName"
                          placeholder={`Last name`}
                          className=" w-full border border-solid border-gray-400 !text-gray-900 rounded-md sm:pr-5" />
                      </div>
                      <div className="flex gap-4 md:flex-col">
                        <Input
                          type="number"
                          name="Phone"
                          placeholder={`Phone number`}
                          className=" w-full border border-solid border-gray-400 !text-gray-900 rounded-md sm:pr-5" />
                        <Input
                          type="email"
                          name="Email"
                          placeholder={`Email Address`}
                          className=" w-full border border-solid border-gray-400 !text-gray-900 rounded-md sm:pr-5" />
                      </div>
                      <TextArea
                        name="Message"
                        placeholder={`Message`}
                        className="!border-gray-400 text-gray-500 sm:pb-5 sm:pr-5 rounded-md" />


                    </div>
                  </div>
                  <div>
                    <div>
                      <Text size="xl" as="p" className="text-gray-800">Payment Mode</Text>
                    </div>
                    <div className=" p-8  flex justify-around">
                      <div className=" w-[28rem] ">
                        <input class=" h-[24px] w-[24px] border-gray-900 border border-solid checked:border-gray-900 checked:border-[3px] checked:border-solid checked:focus:border-gray-900 mb-[0.3rem]"
                          type="radio" name="radio_id" id="radio_id _COD" />
                        <span className=" text-black-900 text-xl mx-2">Cash On Delivery</span>
                      </div>
                      <div className=" w-[28rem] " >
                        <input class=" h-[24px] w-[24px] border-gray-900 border border-solid checked:border-gray-900 checked:border-[3px] checked:border-solid checked:focus:border-gray-900 mb-[0.3rem]"
                        type="radio" name="radio_id" id="radio_id_BT" />
                        <span className=" text-black-900 text-xl mx-2">Bank Transfer</span>
                      </div>
                    </div>
                    <div className=" p-8  flex justify-around">
                      <div className=" w-[28rem] ">
                        <input class=" h-[24px] w-[24px] border-gray-900 border border-solid checked:border-gray-900 checked:border-[3px] checked:border-solid checked:focus:border-gray-900 mb-[0.3rem]"
                          type="radio" name="radio_id" id="radio_id_CD" />
                        <span className=" text-black-900 text-xl mx-2">Credit Card</span>
                      </div>
                      <div className=" w-[28rem] " >
                        <input class=" h-[24px] w-[24px] border-gray-900 border border-solid checked:border-gray-900 checked:border-[3px] checked:border-solid checked:focus:border-gray-900 mb-[0.3rem]"
                        type="radio" name="radio_id" id="radio_id_UPI" />
                        <span className=" text-black-900 text-xl mx-2">UPI</span>
                      </div>
                    </div>
                  </div>
                  <Button size="xl" className=" p-1 mb-4" >Order Now</Button>
                </div>
              </form>
            </div>
          </div>
         

          <Footer className=" mt-16 flex flex-col items-center justify-center gap-[61px] self-stretch bg-gray-900_01 py-[70px] md:py-5 sm:gap-[30px]"/>
        </div>
      </div>
    </>
  )
}
