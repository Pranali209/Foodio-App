import { Button, Heading, Img, Input, Text } from 'components'
import React  from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoggedIn} from 'Store/LoginSlice' ;
import authService from 'Appwrite/Auth/Auth';
import {useForm} from "react-hook-form"
export default function Login({ submitted , onSubmit}) {
  const dispatch = useDispatch() ;
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")

    function handlesignIn(params) {
     dispatch(setLoggedIn(true))
     navigate('/')
    }

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
           
            if (session) {
                const userData = await authService.getCurrentUser()
            
                if(userData) {
                 
                    dispatch(setLoggedIn(true))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (

        <>
            <div className="flex items-center justify-center  h-screen bg-gradient-to-r from-red-100 ...">
                <div
                    className=" border-[4px] border-blue-900 rounded-2xl hover:border-blue-500 transition-all duration-200"
                >
                     {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                     <img src="images\sp5.png" alt=" hero" className='absolute top-[0rem] left-[3rem] h-[30rem] w-[28rem]  squeeze-animate  md: hidden' />
                   
                    <img src="\images\falling_leaves.png" className="absolute top-[26rem] left-[39rem] z-1 md:hidden " />
                    <img src="\images\pizza33.png" className="absolute top-[0] right-[0] md:hidden  "/>
                    <img src="\images\img_kisspng_leaf_pe_158x154.png" className=" w-32  h-32  absolute top-[20rem] left-[36rem] " />
                    <img src="\images\img_kisspng_leaf_pe_117x110.png" className=" w-32  h-32   absolute top-[22rem] right-[36rem]  " />
                    <img src="\images\sp6.png" className="absolute top-[17rem] right-[28rem] -z-20 h-[30rem] w-[36rem] " />
                    <form onSubmit={handleSubmit(login)}
                        className="mx-auto flex items-center space-y-4 py-14 px-12 font-semibold text-gray-500 flex-col"
                    >

                        <Img src="images/img_header_logo.svg" alt="headerlogo" className=" h-12 w-[7rem] text-white md:w-full" />
                        <Heading size='md' className=' text-red-900'> Sign in to Foodio</Heading>
                        <input
                            type="email"
                            name="email"
                            placeholder={`Email Address`}
                            className="w-full p-2 bg-red-200 rounded-md border border-gray-700
                             focus:border-blue-700 hover:border-blue-500 transition-all duration-200 sm:pr-5"
                             {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-2 bg-red-200 rounded-md border border-gray-700
                             focus:border-blue-700 hover:border-blue-500 transition-all duration-200"
                             {...register("password", {
                                required: true,
                             })}
                        />
                        <Button type="submit" className=" w-full p-2 rounded-full  border-[4px] text-black-900 h-[3rem]"
                        onClick = {handlesignIn}>
                            Sign in
                        </Button>
                        <Text size='lg' as="p" className=' text-red-800'>
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </Text>

                    </form>
                </div>
            </div>

        </>



    )
}
