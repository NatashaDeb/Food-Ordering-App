import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_BACKEND_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [tempResList, setTempResList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

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

    if(onlineStatus === false){ return (<h1>You are Offline !! Please Check your internet connection</h1>)}

    //Conditional Rendering
    return listOfRestaurants.length === 0 ? 
     (<Shimmer />) : 
        (<div className="body">
            <div className="top-bar">
            
                <div className="flex items-center">
                <div className="m-4 p-4 ">
                    <input className="border border-solid border-[#62d84b]" value={searchText} onChange={(event)=>{
                        setSearchText(event.target.value);
                    }}></input>

                    <button className="ml-4 px-4 py-2 bg-[#62d84b] rounded-lg" onClick={()=>{
                        let filteredRestaurants = listOfRestaurants.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                       setTempResList(filteredRestaurants);
                       setSearchText("")
                    }}>search</button>
                </div>
                <div className="m-4 p-4">
                <button className="ml-8 px-4 py-2 bg-[#62d84b] rounded-md" onClick={()=>{
                    let RatingsAbove4 = listOfRestaurants.filter(res => res?.info?.avgRating>=4);
                    setTempResList(RatingsAbove4);
                }}>Top Rated Restraunts</button>
                </div>
               
            </div>
            </div>
           
            <div className="flex items-center flex-wrap">
            {tempResList.map(eachRest =><Link key={eachRest.info.id} to={"/restaurant/"+eachRest.info.id}> <RestaurantCard restaurant = {eachRest}/> </Link> )}
            </div>
        </div>);
    
};

export default Body;