
import { COMMON_COUDANARY_ID } from "../utils/constants";
const RestaurantCard = (props) => {

    const {restaurant} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = restaurant?.info;

    return(
        <div className="res-card">
            <div className="res-img-con">
            <img className="res-image" alt="Restarant Image" src= {COMMON_COUDANARY_ID + cloudinaryImageId}/></div>
            <h3 className="name">{name}</h3>
            <h4 className="name">{cuisines.join(", ")}</h4>
            <h4 className="name">Ratinng: {avgRating} ⭐</h4>
            <h4 className="name">{costForTwo}</h4>
            
        </div>
    );
};

export default RestaurantCard;