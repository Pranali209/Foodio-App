import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    ResDetails: [
      {}
    ]
}

export const ReservationSlice = createSlice(
    {
        name: "Reservation",
        initialState,
        reducers: {
            addReservation: (state, action) => {
                console.log(action , "action");
                state.ResDetails.push({
                    id: nanoid(),
                    date: action.payload.date,
                    time :  action.payload.time,
                    partysize: action.payload.partysize
                })
                },
            removeReservation: (state, action) => {
                state.ResDetails = state.ResDetails.filter((reservation) => reservation.id !== action.payload)
            }
        }
    }
)
export const { addReservation, removeReservation } = ReservationSlice.actions
export default ReservationSlice.reducer