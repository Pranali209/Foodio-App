import { Button, Footer, Header, Heading, Img ,Text } from "components";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
function About() {

    return (
        <>
            <Helmet>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-gray-50 pt-[51px] md:pt-5">
                <div className="flex flex-col items-center gap-[105px] md:gap-[78px] sm:gap-[52px]">
                    <div className="container-xs flex flex-col gap-[102px] md:gap-[76px] md:p-5 sm:gap-[51px]">
                        <Header className="underline decoration-red-400  !text-red-400 " />
                    </div>
                    <div className="mt-[10px] flex items-center justify-around gap-5 md:flex-col p-5">
                        <div className="w-[38%] rounded-[300px] bg-red-50 p-[60px] md:w-full animate_spin_simple ">
                            <div className="rounded-[300px] bg-red-100 p-[55px] md:p-5   ">
                                <Img
                                    src="\images\aboutus.png"
                                    alt="about us"
                                    className="rounded-[50%] w-[346px] h-[346px] md:w-full h-full " />

                            </div>
                        </div>
                        <div class="gap-[35px] w-[39%] flex flex-col items-start md:w-full">
                            <div class="flex flex-col gap-4 self-stretch" >
                                <Heading size="4xl" as="h1" className="w-[67%] !font-tinos leading-[110%] !text-red-400 md:w-full">
                                    <span class="font-opensans text-black-900" >
                                        <>
                                        About Our <br/>
                                        </>
                                        </span>
                                        <span class="font-opensans text-red-400" >Restaurant</span>
                                </Heading>
                                <Text as="p" className="leading-[200%] text-gray-700">
                              This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
                                    
                                </Text>
                            </div>
                            <Button color="red_400" size="5xl" shape=" round"   className="min-w-[232px] font-semibold sm:px-5">
                                Order Now
                            </Button>
                        </div>
                    </div>
                   
                    <div className="mt-[50px] flex items-center justify-evenly gap-5 md:flex-col p-5">
                       <Text as= "p"  className=" w-[30%] leading-[200%] md:w-full text-gray-700">
                       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                       Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                       </Text>
                       <div className="w-[38%] rounded-[300px] bg-red-50 p-[60px] l px-14 py-[57px] md:w-full md:p-5">
                        <div className=" rounded-[300px] bg-red-100 p-[55px]  md:p-5">
                          <Img
                          src="\images\aboutus2.png"
                          alt="about us"
                          className="h-[354px] w-[354px] rounded-[50%] md:w-full h-full"
                          />
                        </div>
                       </div>
                    </div>
                    <div className="mt-[50px] flex items-center justify-around gap-5 md:flex-col p-5">
                    <Img
                          src="\images\ownerimage.png"
                          alt="Owner"
                          className="h-[629px] w-[41%] object-cover md:w-full"

                          />
                          <div className=" flex w-[49%] flex-col gap-[34px] md:w-full">
                          <div className="flex flex-col items-start gap-1.5">
                                <Heading size="4xl" as ="h2" className=" w-full leading-[140%] !text-gray-900">
                                <span class="font-opensans text-red-400">Owner</span>
                                <span class="font-opensans text-orange_600">&nbsp;</span>
                                <span class="font-opensans text-gray-900">&amp; Executive Chef</span>
                                </Heading>
                                <Text size="xl" as="h1" className="!text-gray-800">Ismail Marzuki</Text>
                          </div>
                          <div className="flex w-[90%] flex-col items-end md:w-full">
                            <div className="relative h-[309px] self-stretch">
                            <p class="font-poppins sm:text-[26px] md:text-[28px] leading-[200%] bottom-[-0.11px] absolute left-0 right-0 mb-auto ml-auto mr-auto mt-auto w-full text-3xl font-light italic !text-gray-800_01"  
                           >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3 class="text-amber-800_33 font-tinos text-[80px]
                            top-[-21px] left-[-37px] absolute mb-auto ml-auto mr-auto
                             mt-auto  font-bold !text-amber-800_33 md:text-5xl">“</h3>
                              <h4 class="text-amber-800_33 font-tinos rotate-[180deg] text-[80px]  absolute top-[14rem] right-[22rem] font-bold !text-amber-800_33 md:text-5xl 
                              ">“</h4>
                              
                            </div>
                          </div>
                        </div>
                    </div>
                    <Footer className="flex flex-col items-center justify-center gap-[61px] self-stretch bg-gray-900_01 py-[70px] md:py-5 sm:gap-[30px]"/>
                </div>
            </div>
        </>

    );
}

export default About;