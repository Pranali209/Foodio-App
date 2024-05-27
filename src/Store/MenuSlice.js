import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    menuOptions :  [
        { id: "Spaghetti", pngitem41084: "images/img_pngitem_41084.png", Productname: "Spaghetti", cat: "Dinner", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 300 },
        { id: "Gnocchi", pngitem41084: "images/img_pngitem_1447549.png", Productname: "Gnocchi", cat: "Lunch", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 500 },
        { id: "Rovioli", pngitem41084: "images/img_pngegg.png", Productname: "Rovioli", cat: "Dinner", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 400 },
        { id: "Penne Alla Vodak", pngitem41084: "images/img_pngwing.png", Productname: "Penne Alla Vodak", cat: "Lunch", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 450 },
        { id: "Risoto", pngitem41084: "images/img_pngitem_5290903.png", Productname: "Risoto", cat: "Dinner", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 500 },
        { id: "Splitza Signature", pngitem41084: "images/img_pngwing_270x270.png", Productname: "Splitza Signature", cat: "Lunch", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 400 },
        { id: "Scarmbled Eggs with Carrot", pngitem41084: "images/lunch5.png", Productname: "Spaghetti with tomatoes", cat: "Lunch", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 500 },
        { id: "Italian Bruse", pngitem41084: "images/lunch4.png", Productname: "Italian Bruse", cat: "Lunch", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 600 },
        { id: "Leafy Salad", pngitem41084: "images/lunch3.png", Productname: "Leafy Salad", cat: "Lunch", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 400 },
        { id: "Briyani", pngitem41084: "images/dinner.png", Productname: "Briyani", cat: "Dinner", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 300 },
        { id: "Rice with Panner and Sauce", pngitem41084: "images/dinner2.png", Productname: "Rice with Panner and Sauce", cat: "Dinner", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 200 },
        { id: "Salad", pngitem41084: "images/dinner4.png", Productname: "Salad", cat: "Dinner", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 400 },
        { id: "Cheese Cake", pngitem41084: "images/dessert1.png", Productname: "Cheese Cake", cat: "Dessert", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 550 },
        { id: "Strawberry Cheese Cake", pngitem41084: "images/dessert2.png", Productname: "Strawberry Cheese Cake", cat: "Dessert", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 380 },
        { id: "Red velet Cake", pngitem41084: "images/desset3.png", Productname: "Red velet Cake", cat: "Dessert", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 560 },
        { id: "Pink Forest Cake", pngitem41084: "images/dessert4.webp", Productname: "Pink Forest Cake", cat: "Dessert", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 500 },
        { id: "StrawBerry Cream", pngitem41084: "images/dessert6.png", Productname: "StrawBerry Cream ", cat: "Dessert", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 560 },
        { id: "Choco Lava Cake", pngitem41084: "images/Dessert5.png", Productname: "Choco Lava Cake", cat: "Dessert", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 200 },
        { id: "Milk shake with Cream", pngitem41084: "images/drink1.webp", Productname: "Milk shake with Cream", cat: "Drink", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 400 },
        { id: "StrawBerry Cocktail", pngitem41084: "images/drink2.png", Productname: "StrawBerry Cocktail", cat: "Drink", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 300 },
        { id: "Cerry & Pineapple CockTail", pngitem41084: "images/drink3.png", Productname: "Cerry & Strawberry CockTail", cat: "Drink", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 300 },
        { id: "Orange shake", pngitem41084: "images/drink4.png", Productname: "Orange shake", cat: "Drink", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 400 },
        { id: "Mango MilkShake", pngitem41084: "images/drink5.png", Productname: "Mango MilkShake", cat: "Drink", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 300 },
        { id: "Lemonade", pngitem41084: "images/drink6.png", Productname: "Lemonade", cat: "Drink", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 500 },
        { id: "Salad", pngitem41084: "images/dinner4.png", Productname: "Salad", cat: "All catagory", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 600 },
        { id: "Scarmbled Eggs with Carrot", pngitem41084: "images/lunch5.png", Productname: "Spaghetti with tomatoes", cat: "All catagory", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 300 },
        { id: "Cheese Cake", pngitem41084: "images/dessert1.png", Productname: "Cheese Cake", cat: "All catagory", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 500 },
        { id: "Cerry & Pineapple CockTail", pngitem41084: "images/drink3.png", Productname: "Cerry & Strawberry CockTail", cat: "All catagory", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 380 },
        { id: "Spaghetti", pngitem41084: "images/img_pngitem_41084.png", Productname: "Spaghetti", cat: "All catagory", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 470 },
        { id: "Red velet Cake", pngitem41084: "images/desset3.png", Productname: "Red velet Cake", cat: "All catagory", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.", price: 680 },
      ]
}


export const MenuOpts = createSlice(
    {
        name:"Menudata" ,
        initialState,
        reducers: {}
    }
)

export default MenuOpts.reducer