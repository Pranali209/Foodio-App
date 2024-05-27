import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    product: [

    ],
    
}

export const productSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const item = state.product.find((item) => item.id === action.payload.id)
            if (item) {
                item.count += 1
              
            } else {
                const product = {
                    id: action.payload.id,
                    count: 1,
                    Productname: action.payload.Productname,
                    price: action.payload.price,
                    pngitem41084: action.payload.pngitem41084,
                    
                }
                state.product.push(product)
            }
        },
        removeProduct: (state, action) => {
            const item = state.product.find((item) => item.id === action.payload.id)
            if (item) {
                if (item.count !== 0) {
                    item.count -= 1
                }


            }
            console.log(action.payload.id);

        },
        removeProductFrmCart  : (state , action) =>{
            const item = state.product.find((item) => item.id === action.payload.id)
            if (item) {
                if(  item.count == 0)
                    {
                        state.product.pop(item)
                    }
              
            }
        },

        

         clearCart: (state) => {

            state.product = []
            }
        
    }

})



export const { addProduct, removeProduct , removeProductFrmCart,clearCart } = productSlice.actions;

export default productSlice.reducer;



