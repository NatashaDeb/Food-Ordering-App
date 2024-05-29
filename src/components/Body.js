import RestaurantCard from "./RestaurantCard";
import RestList from "../utils/dummyData";
import { useState } from "react";

const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState(RestList);

    return(<div className="body">
    <div className="rating-filter">
        <button className="filter-button" onClick={()=>{
            const RatingsAbove4 = RestList.filter(res=> res.info.avgRating>4);
            setListOfRestaurants(RatingsAbove4);
     }}>Top Rated Restraunts</button>
    </div>
    <div className="cards-container">
       {listOfRestaurants.map(eachRest => <RestaurantCard key={eachRest.info.id} restaurant = {eachRest}/>)}
    </div>
</div>);
    
};

export default Body;