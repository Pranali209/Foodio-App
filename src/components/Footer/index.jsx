import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="container-sm flex flex-col items-center gap-[61px] md:p-5 sm:gap-[30px]">
        <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
          <div className="flex w-[32%] flex-col gap-[42px] md:w-full">
            <Img src="images/img_footer_logo.png" alt="footerlogo" className="h-[51px] w-[35%] object-cover" />
            <Text as="p" className="leading-[200%]">
              Viverra gravida morbi egestas facilisis tortor netus non duis tempor.{" "}
            </Text>
            <div className="flex w-[69%] justify-between gap-5 md:w-full">
              <Button size="3xl" shape="circle" className="w-[60px] !rounded-[30px]">
                <Img src="images/img_twitter.png" />
              </Button>
              <Button size="3xl" shape="circle" className="w-[60px] !rounded-[30px]">
                <Img src="images/img_instagram.png" />
              </Button>
              <Button size="3xl" shape="circle" className="w-[60px] !rounded-[30px]">
                <Img src="images/img_facebook.png" />
              </Button>
            </div>
          </div>
          <div className="mt-[5px] flex w-[31%] items-start justify-between gap-5 md:w-full">
            <div className="flex flex-col items-start gap-[31px]">
              <Heading as="h4" className="!text-red-400">
                Page
              </Heading>
              <ul className="flex flex-col items-start gap-[23px]">
                <li>
                  <a href="Home" target="_blank" rel="noreferrer">
                    <Text as="p">Home</Text>
                  </a>
                </li>
                <li>
                  <a href="Menu" target="_blank" rel="noreferrer">
                    <Text as="p">Menu</Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p">Order online</Text>
                  </a>
                </li>
                <li>
                  <a href="Catering" target="_blank" rel="noreferrer">
                    <Text as="p">Catering</Text>
                  </a>
                </li>
                <li>
                  <a href="Reservation" target="_blank" rel="noreferrer">
                    <Text as="p">Reservation</Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[31px]">
              <Heading as="h4" className="!text-red-400">
                Information
              </Heading>
              <ul className="flex flex-col items-start gap-[23px]">
                <li>
                  <a href="#">
                    <Text as="p">About us</Text>
                  </a>
                </li>
                <li>
                  <a href="Testimonial" target="_blank" rel="noreferrer">
                    <Text as="p">Testimonial</Text>
                  </a>
                </li>
                <li>
                  <a href="Event" target="_blank" rel="noreferrer">
                    <Text as="p">Event</Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-[5px] flex w-[25%] flex-col items-start md:w-full">
            <Heading as="h4" className="!text-red-400">
              Get in touch
            </Heading>
            <Text as="p" className="mt-[31px] w-full leading-[153%]">
              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
            </Text>
            <a href="mailto:abc@example.com" target="_blank" rel="noreferrer" className="mt-[21px]">
              <Text as="p">abc@example.com</Text>
            </a>
            <Text as="p" className="mt-[21px]">
              +123 4567 8901
            </Text>
          </div>
        </div>
        <Text as="p" className="!text-gray-300">
          <span className="text-gray-300">Copyright&nbsp;</span>
          <span className="text-gray-300">© 2022</span>
        </Text>
      </div>
    </footer>
  );
}
