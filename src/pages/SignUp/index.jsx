import { Button, Heading, Img, Input, Text } from 'components'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { addSignUpDetails, setLoggedIn } from 'Store/LoginSlice';
import { useDispatch, useSelector } from "react-redux"
import { useForm } from 'react-hook-form';
import authService from 'Appwrite/Auth/Auth';

export default function SignUp() {

    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const imageurl = 'images/hero.png'
    const create = async (data) => {
        console.log(data);
        try {
            const userData = await authService.createAccount(data)
            console.log(userData, "userdata from createAccount in signup comp");
            if (userData) {

                const userData = await authService.getCurrentUser()
                console.log(userData, " disptach");
                if (userData) {


                    dispatch(addSignUpDetails(userData));
                    dispatch(setLoggedIn(true))
                    navigate("/")
                }


            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <>
            <div className={`bg-gradient-to-r from-red-100 ...   bg-center  h-screen bg-no-repeat flex items-center justify-center overflow-hidden`} >
                <div
                    className=" w-[1130px] h-[700px]  "
                >
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                    <img src="images\sp5.png" alt=" hero" className='absolute top-[0rem] left-[3rem] h-[30rem] w-[28rem]  squeeze-animate md:hidden ' />
                    <img src="images\tomato.png" alt=" hero" className='absolute top-[18rem] left-[34rem] h-[8rem] w-[9rem] md:hidden ' />
                    <img src="\images\veggges.png" className="absolute top-[28rem] left-[26rem] h-[10rem] w-[9rem] z-1 md:hidden " />
                    <img src="\images\mintleaves.webp" className="absolute top-[20rem] right-[27rem] h-[10rem] w-[9rem] z-1md:hidden  " />
                    <img src="\images\cuttomato.png" className="absolute top-[32rem] right-[27rem] h-[10rem] w-[9rem] z-1 md:hidden " />
                    <img src="\images\img_kisspng_leaf_pe_158x154.png" className=" w-32  h-32  absolute top-[20rem] left-[36rem] md:hidden  " />
                    <img src="\images\img_kisspng_leaf_pe_117x110.png" className=" w-32  h-32   absolute top-[22rem] right-[36rem]  " />
                    <img src="\images\sp6.png" className="absolute top-[17rem] right-[28rem] -z-20 h-[30rem] w-[36rem] " />
                    <img src="\images\pizza33.png" className="absolute top-[0] right-[0] md:hidden "/>
                    <form onSubmit={handleSubmit(create)}
                        className="  mx-auto flex items-center space-y-4 py-16 px-12 font-semibold text-gray-500 flex-col"
                    >

                        <Img src="images/img_header_logo.svg" alt="headerlogo" className=" h-12 w-[7rem] text-white md:w-full" />
                        <Heading size='md' className=' text-red-900'> Sign in to Foodio</Heading>

                        <Input
                            type="text"
                            name="FullName"
                            placeholder={`Full name`}
                            {...register("FullName", {
                                required: true,
                            })}
                            className=" w-full border border-solid border-gray-700   focus:border-blue-700 hover:border-blue-500 transition-all duration-200 !text-gray-900 rounded-md sm:pr-5" />
                        <Input
                            type="number"
                            name="Phone"
                            placeholder={`Phone number`}
                            {...register("Phone", {
                                required: true,
                            })}
                            className=" w-full border border-solid border-gray-700  focus:border-blue-700 hover:border-blue-500 transition-all duration-200 !text-gray-900 rounded-md sm:pr-5" />



                        <Input
                            type="email"
                            name="Email"
                            placeholder={`Email Address`}
                            {...register("Email", {
                                required: true,
                            })}
                            className=" w-full border border-solid border-gray-700  focus:border-blue-700 hover:border-blue-500 transition-all duration-200 !text-gray-900 rounded-md sm:pr-5" />
                        <Input
                            type="password"
                            name="password"
                            placeholder={`Password`}
                            {...register("Password", {
                                required: true,
                            })}
                            className="w-full p-2  bg-red-200 rounded-md border border-gray-700 focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                        />


                        <Button type="submit" size='xl' className="  p-2 rounded-full  border-[4px] text-black-900 h-[3rem]"
                        >
                            Sign Up
                        </Button>
                        <Text size='lg' as="p" className=' text-red-800'>
                            Already Have a Account ? <Link to="/login">Sign in</Link>
                        </Text>

                    </form>
                </div>
            </div>

        </>
    )
}

