import {useCart} from "../contexts/CartContext"

const CartCard = () => {
	const {value: cart} = useCart();
	console.log(cart)
	
	return (
		<div className="cart-items">
			<div className="cart-items-header">Cart Items</div>
			{cart.length === 0 && (
				<div className="cart-items-empty"> No items are added. </div>
			)}
			<div>
				{cart.map((item) => (
					<div key={item.id} className="cart-items-list">
						<img 
                        className="cart-items-image"
                        src={item.img} 
                        alt={item.name} />
						<div className="cart-items-name">{item.name}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CartCard;
