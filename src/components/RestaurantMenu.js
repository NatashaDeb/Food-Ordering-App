import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () =>{
    const{resId} = useParams();
     const resInfo = useRestaurantMenu(resId);
     
    if(resInfo===null) return <ShimmerMenu />
     //until data is loaded show shimmer else error will come since data fetching takes time and the futher code wont get values
    
    const {name, areaName, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>Locality: {areaName}</h3>
            <h4>Cuisines Available: {cuisines.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4> <br/>
            <h2>Menu Items</h2>
               <ul>
               {itemCards.map((item)=>(
                   <li key={item?.card?.info?.id}>
                    <div className="menu-item">
                    <h3>{item?.card?.info?.name} Price- ₹ {item?.card?.info?.price/100}</h3>
                    <h4>{item?.card?.info?.description}</h4>
                    </div>
                   </li>
               ))} 
               </ul>
               
            
        </div>
    )
}

export default RestaurantMenu;

{/* <div className="menu-item">
{console.log(item?.card?.info?.name)}
 
<h3>{item?.card?.info?.name} Price-{item?.card?.info?.price}</h3>
<h4>{item?.card?.info?.description}</h4>
</div>  */}