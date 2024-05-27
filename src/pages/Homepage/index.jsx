import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, Slider, RatingBar, Footer, Header } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { useNavigate } from 'react-router-dom'
import { useDispatch , useSelector } from "react-redux";
import { addProduct } from "Store/Slice";
import '../../App.css'
import SignUp from "pages/SignUp";

const data = [
  { name: "Betran Komar", headchef: "Head chef", imageoneone: "images/img_image_1.png" },
  { name: "Ferry Sauwi", headchef: "Chef", imageoneone: "images/img_image_3.png" },
  { name: "Iswan Dracho", headchef: "Chef", imageoneone: "images/img_image_2.png" },
];


export default function HomepagePage() {
  const  data1 =  useSelector( (state) => state.menu.menuOptions)
  const [menu, setMenu] = useState(data1)
  const [catagory, setcatogory] = useState('All catagory')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  function handleSort(e) {
    setMenu(data1)
    setcatogory(e.target.textContent)

  }
  function handleOrder() {
    navigate('/menu')
  }
  function handlereservation(params) {
    navigate('/reservation')
  }


  function handleOrderNow(d) {
    dispatch(addProduct(d))
    navigate('/orderonline')
  }

 

  useEffect(() => {
    setMenu(menu.filter(data => data.cat == catagory))
  }, [catagory])
  return (
    <>
      <Helmet>
      <title>Foodio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[129px] bg-gray-50 md:gap-24 sm:gap-16">
        <div className="flex flex-col items-center gap-[70px] self-stretch bg-gradient-to-r from-red-100 ... py-[50px] mg:gap-[52px] mg:py-5 sm:gap-[35px]">
          <div className="container-xs flex flex-col gap-[102px] md:gap-[76px] md:p-5 sm:gap-[51px]">
          <Header />
          </div>
          <div className="mb-5 flex w-[86%] items-center justify-between gap-5 md:w-full md:flex-col md:p-5">
            <div className="flex w-[47%] flex-col md:w-full">
              <Heading size="5xl" as="h1" className="!font-opensans !text-gray-900_02">
                <span className="text-gray-900_02">
                  <>
                    Best Restaurant
                    <br />
                    In&nbsp;
                  </>
                </span>
                <span className="text-red-400">Town.</span>
              </Heading>
              <Text as="p" className="mt-[15px] w-[91%] leading-[200%] !text-gray-800 md:w-full">
                We provide best food in town, we provide home delivery and dine in services.
              </Text>
              <div className="mt-9 flex gap-6">

                <Button size="xl" shape="round" className=" bg-red-400 min-w-[160px] font-semibold sm:px-2 text-white-A700 "
                  onClick={handleOrder}  >
                  Order now
                </Button>

                <Button size="xl" shape="round" className=" bg-red-200 min-w-[160px] font-semibold sm:px-2 text-white-A700"
                  onClick={handlereservation}>
                  Reservation
                </Button>
              </div>
            </div>
            <Img
              src="images/img_illustration.png"
              alt="illustration"
              className="h-[502px] w-[47%] object-cover md:w-fit h-fit
               animate-rotate-slow-linear"
            />
          </div>
        </div>
        <div className="flex justify-center self-stretch bg-green-50 py-3.5">
          <div className="container-xs flex items-start justify-center gap-[13px] md:flex-col md:p-4 gap-[5px] justify-center align-middle">
            <div className="relative h-[646px] flex-1 md:w-full md:flex-none md:self-stretch">
              <div className="absolute bottom-[-0.02px] left-[0.00px] m-auto flex w-[89%] flex-col items-end">
                <div className="flex items-center self-stretch sm:flex-col">
                  <Img
                    src="images/img_kisspng_leaf_pe.png"
                    alt="kisspngleafpe"
                    className="relative z-[1] h-[175px] w-[25%] self-end object-cover sm:w-[20%] h-fit md:hidden"
                  />
                  <Img
                    src="images/img_kindpng_3443995.png"
                    alt="kindpng3443995"
                    className="relative ml-[-160px] h-[579px] w-[100%] object-cover sm:ml-0 sm:w-full  sm:h-fit "
                  />
                </div>
                <Img
                  src="images/img_kisspng_leaf_pe_117x110.png"
                  alt="kisspngleafpe"
                  className="relative mr-[217px] mt-[-74px] h-[117px] w-[30%] object-cover md:mr-0"
                />
              </div>
              <Img
                src="images/img_kisspng_leaf_pe_158x154.png"
                alt="kisspngleafpe"
                className="absolute right-[0.26px] top-[0.00px] m-auto h-[158px] w-[23%] object-cover md:hidden"
              />
            </div>
            <div className="mt-[91px] flex w-[39%] flex-col items-start gap-[35px] md:w-full">
              <div className="flex flex-col gap-4 self-stretch">
                <Heading size="4xl" as="h2" className="w-[80%] !font-tinos leading-[110%] !text-red-400 md:w-full">
                  <span className="font-opensans text-gray-900_02">
                    <>
                      Our Most <br />
                      Popular&nbsp;
                    </>
                  </span>
                  <span className="font-opensans text-red-400">Dish.</span>
                </Heading>
                <Text as="p" className="leading-[200%] !text-gray-800_01">
                  This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential
                  amino acids your body needs, and is also a good source of fiber.
                </Text>
              </div>

              <Button size="5xl" shape="round" className="bg-red-400 min-w-[180px] font-semibold sm:px-5 text-white-A700
                 "
                onClick={handleOrder}>
                Order now
              </Button>

            </div>
          </div>
        </div>
        <div className="container-xs flex flex-col items-center gap-[70px] md:gap-[52px] md:p-5 sm:gap-[35px]">
          <Heading size="4xl" as="h2" className="text-center !font-opensans">
            Our Popular Menu
          </Heading>
          <Tabs
            className="flex flex-col gap-[50px] self-stretch"
            selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px]"
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            <TabList className="flex flex-wrap justify-between gap-[120px] p-[19px] md:gap-5 items-center border-2">
            <img src="\images\falling_leaves.png"  className="absolute top-[518px] left-[247px] z-1  " />
              <Tab onClick={(e) => handleSort(e)} className="ml-[35px] self-end text-xl  text-gray-900 font-semibold  md:ml-0 p-4 ">All catagory</Tab>
              <Tab onClick={(e) => handleSort(e)} className=" text-xl font-normal text-gray-900 p-4 ">Dinner</Tab>
              <Tab onClick={(e) => handleSort(e)} className="text-xl font-normal text-gray-900 p-4">Lunch</Tab>
              <Tab onClick={(e) => handleSort(e)} className="text-xl font-normal text-gray-900 p-4">Dessert</Tab>
              <Tab onClick={(e) => handleSort(e)} className="mr-[51px] text-xl font-normal text-gray-900 md:mr-0 p-4">Drink</Tab>
            </TabList>
            <div className="flex flex-col items-center gap-12 ">
              {[...Array(5)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} className="absolute items-center">
                  <div className="w-full self-stretch">
                    <div className="grid grid-cols-3 justify-center gap-[35px] md:grid-cols-2 sm:grid-cols-1 ">
                 
                      {menu.map((d, index) => (

                        <div
                          key={"menu" + index}
                          className="flex w-full flex-col justify-center gap-[34px] rounded-[40px] bg-white-A700 p-[30px] sm:p-5 border-2
                          drop-shadow-md">
               
                          <Img
                            src={d.pngitem41084}
                            alt="pngitem41084"
                            className="mt-1.5 h-[270px] w-[270px] object-cover shadow-md hover:scale-110 hover:duration-150 duration-150"
                          />
                          <div className="mb-1.5 flex flex-col items-center">
                            <div className="flex flex-col items-center gap-[11px] self-stretch">
                              <Heading size="xl" as="h2" className="text-center">
                                {d.Productname}
                              </Heading>
                              <Text size="s" as="p" className="w-full text-center leading-[200%] !text-gray-800_02">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="mt-[13px] flex justify-between rounded-[1px]"
                            />
                            <div className="mt-[30px] flex items-center justify-between gap-5 self-stretch relative">
                              <Heading as="h3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 absolute top-4 left-14"
                                  viewBox="0 0 300 500">
                                  <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
                                </svg>{d.price}</Heading>
                              <Button size="xl" className=" bg-red-400 min-w-[121px] rounded-lg font-semibold sm:px-5 text-white-A700 "
                                onClick={(e) => handleOrderNow(d)}>
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                    



                      ))}
                    </div>
                  </div>
                </TabPanel>
              ))}
              <div className="flex items-center gap-2.5">
                <Img src="images/img_arrow_left_black_900.svg" alt="arrowleft" className="h-[15px] w-[15px]" />
                <div className="flex gap-2.5">
                  <Button size="xs" className="min-w-[35px] rounded font-inter font-semibold tracking-[-0.50px]">
                    1
                  </Button>
                  <Button size="xs" className="min-w-[35px] rounded font-inter font-semibold tracking-[-0.50px]">
                    2
                  </Button>
                  <Button size="xs" className="min-w-[35px] rounded font-inter font-semibold tracking-[-0.50px]">
                    3
                  </Button>
                  <Button className="w-[35px] rounded">
                    <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                  </Button>
                </div>
                <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[15px] w-[15px]" />
              </div>
            </div>
          </Tabs>
        </div>
        <div className="container-xs flex flex-col items-center md:p-5">
          <Heading size="4xl" as="h2" className="text-center !font-opensans">
            Our Popular Chef
          </Heading>
          <div className="mt-[53px] flex gap-10 self-stretch md:flex-col">
            {data.map((d, index) => (
              <div key={"homepage" + index} className="flex w-full flex-col items-center gap-[43px] shadow-md hover:scale-105 hover:duration-150 duration-150">
                <div className="self-stretch rounded-[50px] bg-gray-900_33">
                  <Img
                    src={d.imageoneone}
                    alt="imageone"
                    className="h-[549px] w-full rounded-[50px] object-cover md:h-auto"
                  />
                </div>

                <button
                  className="group relative inline-flex items-center justify-center
                   p-0.5 mb-2 mr-2 text-sm font-medium text-white-A700 rounded-lg group 
                   bg-gradient-to-br from-red-800 to-red-400 group-hover:from-red-600 group-hover:to-red-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span
                    className="relative px-5 py-2.5 transition-all ease-in duration-200 bg-white text-white-A700 rounded-md group-hover:bg-opacity-0"
                  >
                    {d.name}
                  </span>
                  <div
                    className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all"
                  >
                    <div
                      className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm
                       text-center text-sm text-red-400 before:-top-2"
                    >
                      <div className="rounded-sm bg-black py-1 px-2">
                        <Heading size="s" shape="round" className="whitespace-nowrap">{d.headchef}</Heading>
                      </div>
                      <div
                        className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"
                      ></div>
                    </div>
                  </div>
                </button>

              </div>
            ))}
          </div>
          <Button size="5xl" shape="round" className="mt-[89px] min-w-[235px] font-semibold sm:px-5 bg-red-400 ">
            View all
          </Button>
        </div>

      
        <div className="container-xs flex justify-center rounded-[24px] bg-red-100 px-14 py-[93px] md:p-5 
         relative overflow-hidden  cursor-pointer text-2xl font-bold h-full">
          <div className="mt-[7px] flex flex-col items-center gap-10">
            <div className="z-10 absolute w-full h-full peer"></div>
            <div
              className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%]
               peer-hover:h-[180%] -top-32 -left-16 w-32 h-44 rounded-full bg-red-300 transition-all duration-700"
            ></div>

            <div className="flex gap-6 absolute 
            text-xl text-center items-end justify-end peer-hover:right-0 
            peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center 
            peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full
             bg-red-900 transition-all duration-500">

              <Button size="5xl" shape="round" className=" bg-red-400 min-w-[232px] font-semibold sm:px-5 text-white-A700 "
                onClick={handleOrder}>
                Order now
              </Button>

              <Button size="5xl" shape="round" className=" bg-red-300 min-w-[232px] font-semibold sm:px-5 text-white-A700 "
                onClick={handlereservation} >
                Reservation
              </Button>
            </div>
            <div className="w-full h-full items-center justify-center flex uppercase">
              <Heading size="4xl" as="h2" className="text-center !font-opensans">
                Hungry? We are open now..
              </Heading>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center justify-center gap-[61px] self-stretch bg-gray-900_01 py-[70px] md:py-5 sm:gap-[30px]" />
      </div>
     
      
    </>
  );
}
