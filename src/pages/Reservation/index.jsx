import React, { useState  } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Button, SelectBox, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { addReservation } from "Store/ReservationSlice";
import { Link } from "react-router-dom";
import EnterDetailsReservation from "modals/EnterDetailsReservation";
import Reservationhasbeenconfirmed from "modals/Reservationhasbeenconfirmed";
import CancelReservation from "modals/CancelReservation";
const today = new Date();

const formattedDate1 = new Date(today.setDate(today.getDate() + 1))
const formattedDate2 = new Date(today.setDate(today.getDate() + 2))
const formattedDate3 = new Date(today.setDate(today.getDate() + 3))
const dropDownOptions = [
  { label: formattedDate1.toDateString() , value:formattedDate1.toDateString() },
  { label: formattedDate2.toDateString(),  value:formattedDate2.toDateString() },
  { label: formattedDate3.toDateString(),  value:formattedDate3.toDateString()},
];
const timeStamp = [
 { label: "12:00 PM", value: "12:00 PM" },
 { label: "1:30 PM", value: "1:30 PM" },
 { label: "5:00 PM", value: "5:00 PM" },

];

const  partysize  =[
 { label: "Table for 2", value: "2" },
 { label: "Table for 4", value: "4" },
 { label: "Table for 8", value: "8" },
]



export default function ReservationPage() {
  const [ isOpen , setIsOpen] = useState(false)
  const [isConfirm , setisConfirm] = useState(false)
  const [ cancelConfirmReservation , setcancelConfirmReservation] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [timeselected , setTimeselected ]= useState(
    {
      date : "",
      time : "",
      partysize: ""
    }
  )
  const handleModalClose = ()=>{   
    setIsOpen(false) 
    
   }
   const handleConfirmedResrvationOpen =()=>{
    setisConfirm(true)
   }
   const handleConfirmedResrvationClose = ()=>{
    setisConfirm(false)
   }
   const handleCancelResrvationOpen = ()=>{
    setcancelConfirmReservation(true)
   }
   const handleCancelResrvationClose = ()=>{
    setcancelConfirmReservation(false)
    setisConfirm(false)
    setIsOpen(false) 
   }
    
  
  const handleSelectTimeChange = (selectedOption) => {
  
    setTimeselected({
      ...timeselected , 
     time : selectedOption.value
    });
    
  };
  const handleSelectDateChange = (selectedOption) => {
  
    setTimeselected({
      ...timeselected , 
    date: selectedOption.value
    });
    
  };
  const handleSelectPartyChange = (selectedOption) => {
  
    setTimeselected({
      ...timeselected , 
    partysize: selectedOption.value
    });
   
  };
 

 function handleBookReservation(params) {
  console.log(timeselected)
   dispatch(addReservation(timeselected));
   setIsOpen(true)
  //  navigate('/EnterDetailsReservation?isOpen=true')



 }
  return (
    <>
      <Helmet>
       
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50 pt-[51px] md:pt-5">
        <div className="flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
          <div className="container-xs flex flex-col gap-[91px] md:gap-[68px] md:p-5 sm:gap-[45px]">
            <Header className="underline decoration-red-400  !text-red-400" />
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <Img
                src="images/img_rectangle_150.png"
                alt="image"
                className="h-[657px] w-[50%] rounded-[20px] object-cover md:w-full"
              />
              <div className="flex w-[43%] flex-col items-start gap-[49px] md:w-full">
                <Heading size="5xl" as="h1" className="!font-opensans">
                  Book a table
                </Heading>
                <div className="flex flex-col gap-10 self-stretch">
                  <div className="flex flex-col gap-10">
                    <SelectBox
                     valuebox = {timeselected}
                      shape="round"
                      name="date"
                      placeholder={`Date`}
                      options={dropDownOptions}
                      onChange = { handleSelectDateChange}
                      className="border border-solid border-gray-400 sm:p-5"
                    />
                    <SelectBox
                      valuebox = {timeselected}
                      shape="round"
                      name="time"
                      placeholder={`Time`}
                      options={timeStamp}
                      onChange = {handleSelectTimeChange}
                      className="border border-solid border-gray-400 sm:p-5"
                    />
                    <SelectBox
                     valuebox = {timeselected}
                      shape="round"
                      name="partysize"
                      placeholder={`Party size`}
                      options={partysize}
                      onChange = {handleSelectPartyChange}
                      className="border border-solid border-gray-400 sm:p-5"
                    />
                  </div>
                  
                    <Button size="8xl" className= "w-full rounded-[20px] font-semibold sm:px-5 bg-red-400 p-4 " onClick = {handleBookReservation} >
                      Book now
                    </Button>
                 
                </div> 
              </div>
            </div>
          </div>
          <Footer className="flex flex-col items-center justify-center gap-[61px] self-stretch bg-gray-900_01 py-[70px] md:py-5 sm:gap-[30px]" />
        </div>
      </div>
      <EnterDetailsReservation isOpen = {isOpen}  onRequestClose = {handleModalClose} onRequestConfirmOpen = {handleConfirmedResrvationOpen} />
      <Reservationhasbeenconfirmed  isOpen={isConfirm} onRequestClose = {handleConfirmedResrvationClose} onRequestCancelOpen = {handleCancelResrvationOpen} />
      <CancelReservation isOpen={cancelConfirmReservation} onRequestClose = {handleCancelResrvationClose} />
    </>
  );
}
