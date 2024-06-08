import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { COMMON_COUDANARY_ID } from "../utils/constants";


const CartItemsDisplay =({cartItemsData})=>{

    const dispatch = useDispatch();

    const handleRemoveButton = (item) =>{
        dispatch(removeItem(item));
    }
 
    return(
        <div>
             
           {cartItemsData.map( item => <div className="p-2 m-2 border-b-2 border-neutral-300 flex justify-between" key={item?.card?.info?.id}>
            <span className="w-9/12">
            <div className="text-left py-2">
                <div className="font-medium ">{item?.card?.info?.name}</div>
                <div  className="font-medium"> - ₹ {item?.card?.info?.price/100 ||item?.card?.info?.defaultPrice/100}</div>
            </div>  
            <p className="text-left text-sm">{item?.card?.info?.description}</p>
            </span>
            <span className="w-3/12">
                <div className="p-2 ">
                <img className="rounded w-25" src={COMMON_COUDANARY_ID+item?.card?.info?.imageId}/>
                <button className="p-2 my-1 bg-slate-100 border border-black text-red-600 rounded" onClick={()=>handleRemoveButton(item)}>Remove</button>
                </div>
            </span>
            </ div> 
            )}
           
        </div>
    )
}

export default CartItemsDisplay;

//item.card.info.name