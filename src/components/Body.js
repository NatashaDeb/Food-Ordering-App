import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       
        const json = await data.json();
       // setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining
    } 

   if(listOfRestaurants.length === 0){
    return(<Shimmer />);
   }

    return(<div className="body">
    <div className="rating-filter">
        <button className="filter-button" onClick={()=>{
            const RatingsAbove4 = listOfRestaurants.filter(res=> res.info.avgRating>4);
            setListOfRestaurants(RatingsAbove4);
     }}>Top Rated Restraunts</button>
    </div>
    <div className="cards-container">
       {listOfRestaurants.map(eachRest => <RestaurantCard key={eachRest.info.id} restaurant = {eachRest}/>)}
    </div>
</div>);
    
};

export default Body;