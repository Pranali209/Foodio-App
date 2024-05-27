import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    SignUpdetails: [
        {
           
            

        }
    ],
    LoggedIn : {
        loggedIn: false
    }
}

export const loginSlice = createSlice(
    {
        name: "SignUp",
        initialState,
        reducers: {
            addSignUpDetails: (state, action) => {
             console.log(action.payload , "payload");
                state.SignUpdetails.push(
                    {
                        id: nanoid(),
                        name: action.payload.FullName,
                        phone: action.payload.Phone,
                        emailid: action.payload.Email,
                        password: action.payload.Password,
                      
                    }

                );
            },
            checkLoggedInStatus: (state, action) => {
                state.SignUpdetails.map((det) => {
                    if (action.payload.emailid === det.emailid && action.payload.password === det.password) {

                        det.loggedIn = true;
                    }
                    else {
                        det.loggedIn = false;
                    }


                })
            },
          

            
            setLoggedIn: (state, action) => {
                
                state.LoggedIn.loggedIn = action.payload;
            }


        }
    })

export default  loginSlice .reducer
export const { addSignUpDetails , setLoggedIn} = loginSlice.actions