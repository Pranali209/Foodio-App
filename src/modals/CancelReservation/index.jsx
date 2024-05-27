import React from "react";
import { Button, Img, Text, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";
import { useSelector } from "react-redux";
export default function CancelReservation({ isOpen,  onRequestClose, ...props }) {

  const data =  useSelector(state => state.reservation.ResDetails)
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1114px] -z-50" onRequestClose={onRequestClose}>
      <div className="container-xs rounded-[16px]  py-[33px] md:p-5 sm:py-5 fixed inset-0  bg-black-900 bg-opacity-20 ">
        <div className="mb-[30px] flex flex-col items-center gap-12">
          <div className="flex flex-col items-end gap-[45px] self-stretch">
            <div className="mr-[58px] flex w-[57%] items-center justify-between gap-5 md:mr-0 md:w-full">
              <Heading size="2xl" as="h1" className="!font-opensans">
                Reservation
              </Heading>
              <Img src="images/img_close.svg" alt="close" className="h-[24px] w-[24px] cursor-pointer" onClick = { onRequestClose} />
            </div>
            <div className="flex h-[232px] items-center justify-center self-stretch bg-[url(/public/images/img_reservation_has_orange_600.png)] bg-cover bg-no-repeat p-[41px] md:h-auto md:p-5">
              <div className="flex w-[63%] flex-col gap-[26px] md:w-full">
                <Heading size="3xl" as="h2" className="leading-[110%] !text-white-A700">
                  Are you sure you want to cancel the reservation?
                </Heading>
                <div className="flex gap-4">
                  <Img src="images/img_user.svg" alt="user" className="h-[30px] w-[30px] self-start" />
                  <Text as="p" className="self-end !text-white-A700">
                    Booking ID : #123456
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[94%] items-center justify-between gap-5 md:w-full md:flex-col">
            <div className="flex w-[66%] items-center justify-between gap-5 md:w-full md:flex-col">
              <div className="w-full rounded-[165px] bg-deep_orange-200_19 p-8 sm:p-5">
                <div className="rounded-[132px] bg-deep_orange-200_33 p-[27px] sm:p-5">
                  <Img src="images/img_unsplash.png" alt="unsplash" className="h-[210px] w-[210px] rounded-[50%]" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[30px]">
                <Heading as="h2">Reservation detail</Heading>
                <div className="flex flex-col items-start gap-[19px]">
                  <div className="flex items-center gap-5">
                    <Img src="images/img_thumbs_up.svg" alt="thumbsup" className="h-[34px] w-[34px]" />
                    <Text as="p" className="self-end !text-gray-800_01">
                    {data.length > 1 ?  data[1].date  : " "}
                    </Text>
                  </div>
                  <div className="flex items-center gap-5">
                    <Img src="images/img_clock.svg" alt="clock" className="h-[34px] w-[34px]" />
                    <Text as="p" className="self-end !text-gray-800_01">
                    {data.length > 1 ?  data[1].time  : " "}
                    </Text>
                  </div>
                  <div className="flex items-center gap-5">
                    <Img src="images/img_lock.svg" alt="lock" className="h-[34px] w-[34px]" />
                    <Text as="p" className="!text-gray-800_01">
                    {data.length > 1 ?  data[1].partysize  : " "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[24%] flex-col gap-[30px] md:w-full">
              <Button
                onClick = {onRequestClose}
                size="7xl"
                rightIcon={<Img src="images/img_close_white_a700.svg" alt="close" className="h-[34px] w-[34px]" />}
                className="w-full gap-5 rounded-[20px] sm:px-5 bg-red-400 "
              >
                Cancel
              </Button>
             
                <Button size="7xl" className="w-full rounded-[20px] sm:px-5 bg-red-400" onClick = {onRequestClose}>
                  Go Back
                </Button>
             
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
