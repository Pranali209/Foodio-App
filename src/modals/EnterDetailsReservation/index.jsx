import React, { useState,useEffect } from "react";
import { Text, Heading, Img, Button, TextArea, SelectBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const dropDownOptions = [
  { label: "Table for 2", value: "2" },
  { label: "Table for 4", value: "4" },
  { label: "Table for 8", value: "8" },



];

export default function EnterDetailsReservation({ isOpen ,onRequestClose,onRequestConfirmOpen,  ...props }) {

  const data =  useSelector(state => state.reservation.ResDetails)


   function handleConfirmreservation(params) {
    onRequestClose()
    onRequestConfirmOpen()
   }
  

  
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1114px]  " onRequestClose={onRequestClose}>
      <div className="container-xs flex flex-col items-center gap-[47px] rounded-[16px] p-10 md:p-5 fixed inset-0 bg-black-900 bg-opacity-40 backdrop-blur-sm" >
        <div className="flex flex-col items-center">
          <Img src="images/img_close.svg" alt="close" className="relative z-[1] h-[20px] w-[20px] self-end cursor-pointer" onClick = {onRequestClose} />
          <Heading size="2xl" as="h1" className="relative mt-[-4px] !font-opensans">
            Reservation
          </Heading>
          <Text
            as="p"
            className="mt-[27px] flex items-center justify-center rounded-[20px] bg-light_blue-A100_66 px-[35px] py-[17px] !text-black-900 sm:px-5  bg-sky-200"
          >
            <span className="text-gray-800_01">Due to limited availability, we can hold this table for you for</span>
            <span className="text-black-900 " >&nbsp;</span>
            <span className="font-semibold text-gray-900">5:00 minutes</span>
          </Text>
        </div>
        <div className="mb-5 flex w-[96%] items-start justify-between gap-5 md:w-full md:flex-col">
          <div className="flex w-[48%] flex-col items-start gap-[17px] md:w-full">
            <Heading as="h2" className="!text-black-900">
              Data order
            </Heading>
            <div className="flex flex-col gap-6 self-stretch">
              <div className="flex flex-col gap-6">
                <Input
                  size="sm"
                  shape="round"
                  type="text"
                  name="firstName"
                  placeholder={`First name`}
                  className="sm:pr-5 w-full"
                />
                <Input
                  size="sm"
                  shape="round"
                  type="text"
                  name="lastName"
                  placeholder={`Last name`}
                  className="sm:pr-5 w-full"
                />
                <Input
                  size="sm"
                  shape="round"
                  type="number"
                  name="phoneNumber"
                  placeholder={`Phone number`}
                  
                  className="gap-4 sm:pr-5 w-full"
                />
                <Input
                  size="sm"
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`Email address`}
                  className="sm:pr-5 w-full"
                />
                <SelectBox
                  size="xs"
                  indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" className="h-[21px] w-[21px]" />}
                  name="selectan"
                  placeholder={`Select an occasion`}
                  options={dropDownOptions}
                  className="gap-px rounded-lg border border-solid border-gray-400 sm:pr-5"
                />
                
              </div>
             
                <Button size="2xl" className="w-full rounded-lg sm:px-5 bg-red-400" onClick = {handleConfirmreservation}>
                  Confirm reservation
                </Button>
              
            </div>
          </div>
          <div className="flex w-[43%] flex-col gap-[30px] md:w-full">
            <div className="flex flex-col items-start gap-10 rounded-[20px] bg-blue_gray-100_19 p-[30px] sm:p-5">
              <Heading as="h2" className="ml-[-20px] md:ml-0">
                Reservation detail
              </Heading>
              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex items-center ">
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[34px] w-[34px]" />
                  <Text as="p" className="self-end !text-gray-800_01 mx-2">
                    {data.length > 1 ?  data[1].date  : " "}
                  </Text>
                </div>
                <div className="flex w-[48%] items-center  md:w-full">
                  <Img src="images/img_clock.svg" alt="clock" className="h-[34px] w-[34px]" />
                  <Text as="p" className="self-end !text-gray-800_01 mx-2">
                    {data.length > 1 ? data[1].time : " " }
                  </Text>
                </div>
                <div className="flex items-center  ">
                  <Img src="images/img_lock.svg" alt="lock" className="h-[34px] w-[34px]" />
                  <Text as="p" className="!text-gray-800_01 mx-2">
                   {data.length > 1 ? data[1].partysize : " "} people
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 my-0">
              <Heading as="h3" className="!text-black-900">
                Restaurant informations
              </Heading>
              <Text as="p" className="w-full leading-[30px] !text-gray-800_01">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
    
  );
}
