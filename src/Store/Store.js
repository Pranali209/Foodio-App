import { configureStore } from "@reduxjs/toolkit";
import  MenuOpts  from "./MenuSlice";
import  ProductReducer  from './Slice'
import  ReservationSlice  from "./ReservationSlice";
import  LoginReducer  from "./LoginSlice";
 export const store = configureStore(
    {
        reducer:
        {
            reservation : ReservationSlice,
            cart :ProductReducer ,
            login : LoginReducer,
            menu : MenuOpts
        }
        
    }
 )