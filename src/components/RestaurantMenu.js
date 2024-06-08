import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () =>{
    const{resId} = useParams();
     const resInfo = useRestaurantMenu(resId);
     const [showItems, setShowItems] = useState(0);
     const [vegMenu, setVegMenu] = useState([]);
     

    if(resInfo===null) return <ShimmerMenu />
     //until data is loaded show shimmer else error will come since data fetching takes time and the futher code wont get values
    
    const {name, areaName, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
         c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

         const sortVegetarian =() =>{
            const veg = categories.filter(
                v => v?.card?.card?.itemCards?.card?.info?.isVeg === 1
            );
            console.log(veg);
            //categories?.card?.card?.itemCards?.card?.info?.isVeg===1
         }

   // console.log(categories);
    return(
        <div className="text-center">
            <h1 className="font-bold text-3xl my-8 ">{name}</h1>
            <h3 className="font-bold">Locality: {areaName}</h3>
            <h4 className="font-semibold">Cuisines Available: {cuisines.join(", ")}</h4>
            <h4 className="font-bold">{costForTwoMessage}</h4> <br/>
            <h2 className="font-bold text-2xl">Menu Items</h2>
            <button className="bg-green-500 p-2 m-4 ml-20 rounded left-px text-xs flex justify-self-end" onClick={sortVegetarian}>Veg Only</button>
            {
                categories.map((category, index) => (
                    <RestaurantCategory key={category?.card?.card?.title} 
                    categoryData = {category?.card?.card}
                    showItems ={index === showItems? true : false}
                    setShowItems = {()=>setShowItems(index)}
                    />
                 )) 
            }
        </div>
    )
}

export default RestaurantMenu;

 {/* <ul>
                
               {itemCards.map((item)=>(
                   <li key={item?.card?.info?.id}>
                    <div className="menu-item">
                    <h3>{item?.card?.info?.name} Price- ₹ {item?.card?.info?.price/100}</h3>
                    <h4>{item?.card?.info?.description}</h4>
                    </div>
                   </li>
               ))} 
               </ul> */}