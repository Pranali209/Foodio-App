import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, GoogleMap, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const navigate = useNavigate()
  function handleSubmit(e) {
   
    e.preventDefault();
    if (e.target.firstName.value   && e.target.lastName.value &&  e.target.email.value  &&  e.target.subject_one.value   &&  e.target.massage_one.value   ) {
      alert(" Message submitted successfully ")
      navigate('/')
    }
    else {
      alert("Please fill all the fields")
    }
  }
  return (
    <>
      <Helmet>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50 pt-[51px] md:pt-5">
        <div className="flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
          <div className="container-xs flex flex-col gap-[102px] md:gap-[76px] md:p-5 sm:gap-[51px]">
            <Header className="underline decoration-red-400  !text-red-400" />
            <div className="flex flex-col items-center gap-[50px]">
              <div className="flex w-[87%] flex-col items-center gap-4 md:w-full">
                <a href="#">
                  <Heading size="6xl" as="h1" className="!font-opensans">
                    Contact us
                  </Heading>
                </a>
                <Text size="2xl" as="p" className="w-full text-center !font-normal leading-[37px] !text-gray-800_01">
                  We love hearing from our customers. Feel free to share your experience or ask any questions you may
                  have.
                </Text>
              </div>
              <div className="flex gap-10 self-stretch md:flex-col">
                <GoogleMap showMarker={false} className="h-[550px] w-full" />
                <div className="flex w-full flex-col gap-9">

                  <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
                    <Input shape="round" type="text" name="firstName" placeholder={`First name`} className="sm:px-5 w-full" />
                    <Input shape="round" type="text" name="lastName" placeholder={`Last name`} className="sm:px-5  w-full" />
                    <Input shape="round" type="email" name="email" placeholder={`Email address`} className="sm:px-5  w-full" />
                    <Input shape="round" name="subject_one" placeholder={`Subject`} className="sm:px-5  w-full" />
                    <TextArea
                      shape="round"
                      name="massage_one"
                      placeholder={`Message`}
                      className="!border-gray-400 text-gray-500 sm:p-5"
                    />
                    <Button size="6xl" className="w-full rounded-[12px] sm:px-5">
                      Submit
                    </Button>

                  </form>



                </div>
              </div>
            </div>
          </div>
          <Footer className="flex flex-col items-center justify-center gap-[61px] self-stretch bg-gray-900_01 py-[70px] md:py-5 sm:gap-[30px]" />
        </div>
      </div>
    </>
  );
}
