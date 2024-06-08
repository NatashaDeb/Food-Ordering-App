import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showItems, setShowItems] = useState(0);
    const [vegMenu, setVegMenu] = useState(false);

    if (resInfo === null) return <ShimmerMenu />;
    //until data is loaded show shimmer else error will come since data fetching takes time and the futher code wont get values

    const sortVegetarian = () => {
        setVegMenu(!vegMenu);
    };

    const { name, areaName, costForTwoMessage, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // Filter veg categories if vegMenu is true
    const filteredCategories = vegMenu
        ? categories.map(category => {
              const vegItems = category?.card?.card?.itemCards?.filter(item => item?.card?.info?.isVeg);
              return { ...category, card: { ...category.card, card: { ...category.card.card, itemCards: vegItems } } };
          }).filter(category => category?.card?.card?.itemCards?.length > 0)
        : categories;

    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl my-8 ">{name}</h1>
            <h3 className="font-bold">Locality: {areaName}</h3>
            <h4 className="font-semibold">Cuisines Available: {cuisines.join(", ")}</h4>
            <h4 className="font-bold">{costForTwoMessage}</h4> <br />
            <h2 className="font-bold text-2xl">Menu Items</h2>
            <button
                className=" bg-black text-white p-2 m-4 ml-20 rounded left-px text-xs flex justify-self-end"
                onClick={sortVegetarian}
            >
                {vegMenu ? "Show All" : "Veg Only"}
            </button>
            {filteredCategories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    categoryData={category?.card?.card}
                    showItems={index === showItems}
                    setShowItems={() => setShowItems(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;