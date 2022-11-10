import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({id, img, title, price, amount}) => {
    const dispatch = useDispatch();

    function dispatchIncrease() {
        dispatch(increase({ id }))
    }

    function dispatchDecrease() {
        if(amount === 1) {
            dispatch(removeItem(id));
            return;
        }
        dispatch(decrease({ id }))
    }
 
    return (
        <article className="cart-item">
            <img src={img} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={()=> dispatch(removeItem(id))}>remove</button>
            </div>
            <div>
                <button className="amount-btn" onClick={()=> dispatchIncrease()}><ChevronUp /></button>
                <p className="amount">{amount}</p>
                <button className="amount-btn" onClick={()=> dispatchDecrease()}><ChevronDown /></button>
            </div>
        </article>
    )
}

export default CartItem;