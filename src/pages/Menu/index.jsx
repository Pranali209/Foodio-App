import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, RatingBar, Header, Footer } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, addProduct } from "Store/Slice";
import { useNavigate } from "react-router-dom";
export default function MenuPage() {

  const  data1 =  useSelector( (state) => state.menu.menuOptions)

  const [menu, setMenu] = useState(data1)
  const [catagory, setcatogory] = useState('All catagory')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleSort(e) {
    setMenu(data1)
    setcatogory(e.target.textContent)
   
  }

  useEffect(() => {
    setMenu(menu.filter(data => data.cat == catagory))
  }, [catagory])


  function handleOrderNow(d) {

   
    dispatch(addProduct(d))
    navigate('/orderonline')

  }
  return (
    <>
      <Helmet>
        
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[139px] bg-gray-50 pt-[51px] md:gap-[104px] md:pt-5 sm:gap-[69px] ">
       
        <div className="container-xs flex flex-col items-center gap-[92px] md:gap-[69px] md:p-5 sm:gap-[46px]">
        
          <div className="container-xs flex flex-col gap-[102px] md:gap-[76px] md:p-5 sm:gap-[51px]">
              <Header className="underline decoration-red-400  !text-red-400 " />
          </div>
      <div className="flex h-[200px] md:flex-col justify-start">
       <img src="\images\menu banner.png" alt=""  className="w-100% md:w-full h-fit"  />
       <Heading size="3xl" as="h2" className="text-center !font-opensans absolute  left-20 top-30 gap-2  md: left-10 ">
         <span className="text-gray-900_02 md:text-xl ">
          <img src="\images\img_kisspng_leaf_pe_158x154.png" className=" w-24 h-24 absolute animate-fall"/>
                  <>
                  Dive into deliciousness with 
                    <br />
                    Our&nbsp;
                  </>
                </span>
                <span className="text-red-400 md:text-lg">Signature dishes!</span>
          </Heading>
          <img src="\images\burger.png" className="absolute left-[-10px] top-72 animate-custom-bounce"/>
          <img src="\images\falling_leaves.png"  className="absolute top-20 left-[100px] z-1 animate-fall " />
          <img src="\images\img_kisspng_leaf_pe_117x110.png" className=" w-24 h-24 absolute top-80 animate-fall" />
          <img src="\images\img_kisspng_leaf_pe_158x154.png" className=" w-24 h-24  absolute top-28 right-56 animate-fall" />
          <img src="\images\img_kisspng_leaf_pe_117x110.png" className=" w-24 h-24   absolute top-80 right-10 animate-fall" />
          <img src="\images\pizza33.png" className="absolute top-28 right-[0px] animate-pulse md:hidden"/>
          </div>
       
          <Tabs
            className="flex flex-col gap-[50px] self-stretch"
            selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px]"
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            <TabList className="flex flex-wrap justify-between gap-[120px] p-[19px] md:gap-5 items-center ">
            <img src="\images\falling_leaves.png"  className="absolute top-[518px] left-[247px] z-1 md:hidden  " />
              <Tab onClick={(e) => handleSort(e)} className="ml-[35px] self-end text-xl  text-gray-900 font-semibold  md:ml-0 p-4 z-10 ">All catagory</Tab>
             
              <Tab onClick={(e) => handleSort(e)} className=" text-xl font-normal text-gray-900 p-4">Dinner</Tab>
              <Tab onClick={(e) => handleSort(e)} className="text-xl font-normal text-gray-900 p-4">Lunch</Tab>
              <Tab onClick={(e) => handleSort(e)} className="text-xl font-normal text-gray-900 p-4">Dessert</Tab>
              <Tab onClick={(e) => handleSort(e)} className="mr-[51px] text-xl font-normal text-gray-900 md:mr-0 p-4">Drink</Tab>
            </TabList>
            <div className="flex flex-col items-center gap-12">
              {[...Array(5)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} className="absolute items-center">
                  <div className="w-full self-stretch">
                    <div className="grid grid-cols-3 justify-center gap-[35px] md:grid-cols-2 sm:grid-cols-1">
                      {menu.map((d, index) => (

                        <div
                          key={"menu" + index}
                          className="flex w-full flex-col justify-center gap-[34px] rounded-[40px] bg-white-A700 p-[30px] sm:p-5 border-2
                          drop-shadow-md"
                        >

                          <Img
                            src={d.pngitem41084}
                            alt="pngitem41084"
                            className="mt-1.5 h-[270px] w-[270px] object-cover hover:scale-110 hover:duration-150 duration-150"
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
                              <Button size="xl" className=" bg-red-400 min-w-[121px] rounded-lg font-semibold sm:px-5 text-white-A700"
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
        <Footer className="flex flex-col items-center justify-center gap-[61px] self-stretch bg-gray-900_01 py-[70px] md:py-5 sm:gap-[30px]"/>
      </div>
    </>
  );
}
