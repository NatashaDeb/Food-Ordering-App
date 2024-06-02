
import { COMMON_COUDANARY_ID } from "../utils/constants";
const RestaurantCard = (props) => {

    const {restaurant} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = restaurant?.info;

    return(
        <div className="p-4 m-4 w-[250px] bg-[#f0f0f0] hover:bg-slate-200">
            <div className="res-img-con">
            <img className="rounded-md" alt="Restarant Image" src= {COMMON_COUDANARY_ID + cloudinaryImageId}/></div>
            <h3 className="font-bold py-3">{name}</h3>
            <h4 className="name">{cuisines.join(", ")}</h4>
            <h4 className="name">Ratinng: {avgRating} ⭐</h4>
            <h4 className="font-medium">{costForTwo}</h4>
            
        </div>
    );
};

export default RestaurantCard;