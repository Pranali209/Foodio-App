import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading, Input, RatingBar } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, addProduct ,removeProductFrmCart } from "Store/Slice";
import { useNavigate } from "react-router-dom";




export default function OrderonlinePage() {
  const data1 = useSelector(state => state.cart.product)
  const [totalCost, settotalCost] = useState(0)
  
  let subtotal = 0;
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    data1.map((d) => {
      console.log(d);
      // if(d.count > 0) { dispatch (removeProduct(d))}
      subtotal = subtotal + (d.price * d.count)
      console.log(subtotal);
    })
    settotalCost(subtotal)
  })

  function handleMinus(d) {
    settotalCost(totalCost => totalCost - 1)
    dispatch(removeProduct(d))
    if(d.count ===  1)
      {
        
        dispatch(removeProductFrmCart(d))
      }
  }

  function handlePlus(d) {
    settotalCost(totalCost => totalCost + 1)
    dispatch(addProduct(d))

  }
  
  function handleCheckout() {
    navigate('/checkout')
  }

  return (
    <>
      <Helmet>
      
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[139px] bg-gray-50 pt-[51px] md:gap-[104px] md:pt-5 sm:gap-[69px]">
        <div className="container-xs flex flex-col gap-[103px] md:gap-[77px] md:p-5 sm:gap-[51px]">
        <Header className="underline decoration-red-400  !text-red-400  "    />
          <div className="flex flex-col gap-[69px] sm:gap-[34px]">
            <div className="flex flex-col items-end pl-14 pr-[428px] md:px-2 h-80">
              <img src="\images\delivery.png" alt="" className=" absolute top-10 ride" />
              <Heading size="3xl" as="h2" className="text-center !font-opensans absolute  left-20 top-30 gap-2 md:left-10">
                <span className="text-gray-900_02 md:text-xl">
                 <img src="\images\delivery2.png" className="absolute h-32 w-28 z-0 parachute"/>
                  <>
                   Food at your fingertips   Order
                    <br />
                   online with&nbsp;
                  </>
                </span>
                <img src="\images\food2.png" className="absolute h-44 w-40 z-0 top-36 left-[-70px] Bigparachute"/>
                <img src="\images\food3.png" className="absolute h-28 w-24 left-28 Smallparachute"/>
                <span className="text-red-400 md:text-xl"> Ease</span>
              </Heading>
            </div>
            <div className="flex flex-col gap-[59px] sm:gap-[29px]">
              {data1.length>0 ?(


             
              <div className="flex items-center gap-[46px] md:flex-col">
                <div className="flex flex-1 flex-col gap-12 md:self-stretch">
                  <div className="flex w-[18%] flex-col items-start gap-2.5 md:w-full">
                    <Heading size="xl" as="h2" className=" w-72">
                       Order List
                    </Heading>
                    <div className="h-[2px] w-full self-stretch bg-red-400" />
                  </div>
                  <div className="flex flex-col gap-6 ">
                    <div className="flex gap-[30px] md:flex-col">
                      {data1.map((d, index) => (
                      
                        <div
                          key={"listfusillione" + index}
                          className="flex w-full flex-col items-center rounded-[45px] bg-white-A700 p-5 border-2
                          drop-shadow-md"
                        >
                          <Img
                            src={d.pngitem41084}
                            alt="fusilli"
                            className="h-[210px] w-[210px] object-cover"
                          />
                          <Heading size="s" as="h5" className="mt-[18px] text-center">
                            {d.Productname}
                          </Heading>
                          <RatingBar
                            value={5}
                            isEditable={true}
                            color="#f54748"
                            activeColor="#f54748"
                            size={15}
                            className="mt-[7px] flex justify-between rounded-[1px]"
                          />

                          <Heading size="xs" as="h6" className="mt-[22px]">
                            {d.price}
                          </Heading>
                          <div className="mt-2.5 flex w-[65%] items-center justify-between gap-5 rounded-[16px] bg-gray-50_01 md:w-full md:p-5">
                            <Button
                              onClick={() => handleMinus(d)}
                              shape="round"
                              rightIcon={
                                <Img src="images/img_vector_25.svg" alt="vector 25" className="h-px w-[10px] bg-white-A700" />
                              }
                              className="min-w-[33px] gap-[11px]"
                            />
                            <Text size="md" as="p" className="!text-[16.62px] !text-gray-900">
                              {d.count}
                            </Text>
                            <Button
                              onClick={() => handlePlus(d)}
                              shape="round"
                              rightIcon={<Img src="images/img_plus.svg" alt="plus" className="h-[10px] w-[10px] text-slate-50" />}
                              className="min-w-[33px] gap-[11px] !shadow-md"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex w-[32%] flex-col items-center justify-center gap-11 rounded-[20px] bg-white-A700 py-[45px] shadow-xs md:w-full md:py-5">
                  <div className="flex flex-col items-center gap-[51px] self-stretch sm:gap-[25px]">
                    <div className="flex flex-col items-center gap-[46px] self-stretch">
                      <Heading size="xl" as="h3">
                        Order list
                      </Heading>
                      <div className="h-px w-full self-stretch bg-blue_gray-100" />
                    </div>
                    <div className="flex w-[83%] flex-col gap-16 md:w-full  p-4">
                      {data1.map((d, index) => (
                        <div key={"listspaghetti" + index} className="flex flex-1 flex-col gap-[31px]">
                          <div className="flex items-start justify-between gap-5">
                            <Heading as="h4" className="!text-black-900">
                              {d.Productname}
                            </Heading>
                            <Img src={d.pngitem41084} alt="spaghetti" className="h-[24px] w-[24px] md:w-[5rem] h-[6rem]" />
                          </div>
                          <div className="flex items-center justify-between gap-5">
                            <div className="flex w-[42%] items-center justify-between gap-5 self-start rounded-[16px] bg-gray-50_01">
                              <Button
                                onClick={() => handleMinus(d)}
                                shape="round"
                                rightIcon={
                                  <Img src="images/img_vector_25.svg" alt="vector 25" className="h-px w-[10px] bg-gray-50_01" />
                                }
                                className="min-w-[33px] gap-[11px]"
                              />
                              <Text size="md" as="p" className="self-start !text-[16.62px] !text-gray-900">
                                {d.count}
                              </Text>
                              <Button
                                onClick={() => handlePlus(d)}
                                shape="round"
                                rightIcon={<Img src="images/img_plus.svg" alt="plus" className="h-[10px] w-[10px]" />}
                                className="min-w-[33px] gap-[11px] !shadow-md"
                              />
                            </div>
                            <Text size="2xl" as="p" className="!text-gray-900">
                              {d.price}
                            </Text>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col items-center gap-6 self-stretch">
                      <div className="h-px w-full self-stretch bg-gray-400_01" />
                      <div className="flex w-[83%] flex-col items-start gap-5 md:w-full p-4">
                        <Heading as="h4" className="!text-black-900">
                          Voucher Code
                        </Heading>
                        <div className="flex gap-[22px] self-stretch ">
                          <input type="text" name="freetoeat"placeholder={`FREETOEAT`} />
                          {/* <Input name="freetoeat" placeholder={`FREETOEAT`} className="" /> */}
                  
                          <Button
                          
                            shape="round"
                            rightIcon={
                              <Img src="images/img_plus_white_a700.svg" alt="plus" className="h-[15px] w-[10px] " />
                            }
                            className="min-w-[60px] gap-5 !rounded-[15px]"
                          />
                        </div>
                      </div>
                      <div className="h-px w-full self-stretch bg-gray-400_01" />
                    </div>
                  </div>
                  <div className="flex w-[83%] flex-col gap-[65px] md:w-full md:p-5 sm:gap-8">
                    <div className="flex flex-col gap-[26px]">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading as="h4" className="!text-black-900">
                          Subtotal
                        </Heading>
                        <Text size="2xl" as="p" className="!text-gray-900 relative">
                          {totalCost}<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 absolute top-2 right-14"
                            viewBox="0 0 300 500">
                            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
                          </svg>
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading as="h4" className="!text-black-900">
                          Tax fee
                        </Heading>
                        <Text size="2xl" as="p" className="!text-gray-900 relative">
                          30<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 absolute top-2 right-12"
                            viewBox="0 0 300 500">
                            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
                          </svg>
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading as="h4" className="!text-black-900">
                          Voucher
                        </Heading>
                        <Text size="2xl" as="p" className="!text-gray-900 relative">
                          5.0<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 absolute top-2 right-12"
                            viewBox="0 0 300 500">
                            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
                          </svg>
                        </Text>
                      </div>
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading as="h4" className="!text-black-900">
                          Total
                        </Heading>
                        <Text size="2xl" as="p" className="!text-gray-900 relative">
                        {totalCost + 5 + 30}<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 absolute top-2 right-14"
                            viewBox="0 0 300 500">
                            <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
                          </svg>
                        </Text>
                      </div>
                    </div>
                    <Button size="2xl" shape="round" className="w-full !rounded-[15px] font-semibold sm:px-5 bg-red-400"
                    onClick = {handleCheckout}>
                      Checkout
                    </Button>
                  </div>
                </div>
              </div>
              ):(
                <>
                <img src="/images/empty-cart.svg" className=" h-96 w-96 mx-auto "/>
                <Heading  size="xl" as="h6" className="mx-auto ">Your cart is Empty</Heading>
                <Heading size="sm" as='h6' className="mx-auto text-gray-600 mt-[-44px] md:mt-0" >To browser , Visit the main pages to place the order</Heading>
                <Button className=' w-40 mx-auto mt-[-40px] md:mt-0 ' onClick= { () => (navigate('/menu'))}> Go back</Button>
             
                </>
                
              )}

              <div className="ml-[242px] flex items-center gap-2.5 md:ml-0 sm:flex-col">
               
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center self-stretch bg-gray-900_01 py-[70px] md:py-5" />
      </div>
    </>
  );
}
