import CategoryItemsList from "./CategoryItemsList";

const RestaurantCategory =({categoryData, showItems, setShowItems}) =>{

    

    const showMenu = () =>{
        setShowItems();
    }

    return(

        <div>
             <div className="w-10/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
                <div  className=" flex justify-between" onClick={showMenu}>
                    <span className="font-bold cursor-pointer" >
                        {categoryData?.title} ({categoryData?.itemCards?.length})
                    </span>
                    <span>▼</span>
                </div>
                {showItems && <CategoryItemsList categoryItemsData ={categoryData?.itemCards}/> } 
                
                </div>
            
        </div>
    )
}

export default RestaurantCategory;