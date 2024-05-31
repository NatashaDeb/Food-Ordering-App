import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_BACKEND_API } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [tempResList, setTempResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_BACKEND_API);
       
        const json = await data.json();
       // setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //optional chaining
       setTempResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //initially we are assigning the tempary list to original list of restaurants
    } 


    //Conditional Rendering
    return listOfRestaurants.length === 0 ? 
     (<Shimmer />) : 
        (<div className="body">
            <div className="top-bar">
            
                <div className="rating-filter">
                <div className="search">
                    <input className="search-input" value={searchText} onChange={(event)=>{
                        setSearchText(event.target.value);
                    }}></input>

                    <button className="search-btn" onClick={()=>{
                        let filteredRestaurants = listOfRestaurants.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                       setTempResList(filteredRestaurants);
                       setSearchText("")
                    }}>search</button>
                </div>
                <button className="filter-button" onClick={()=>{
                    let RatingsAbove4 = listOfRestaurants.filter(res => res?.info?.avgRating>=4);
                    setTempResList(RatingsAbove4);
                }}>Top Rated Restraunts</button>
            </div>
            </div>
           
            <div className="cards-container">
            {tempResList.map(eachRest =><Link key={eachRest.info.id} to={"/restaurant/"+eachRest.info.id}> <RestaurantCard restaurant = {eachRest}/> </Link> )}
            </div>
        </div>);
    
};

export default Body;