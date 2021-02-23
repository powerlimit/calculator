import React, { useEffect, useRef, useState } from "react"
import LineItem from "./LineItem"
import { useShopify } from "../hooks"
import {useClickOutside} from '../hooks/useClickOutside';
import cartClose from '../assets/images/cart-close.png';
import cartEmpty from '../assets/images/cart-empty.png';
import cartFull from '../assets/images/cart-filled.png';


export const Cart = () => {

  const [discount, setDiscount] = useState('');
  const [loading, setLoading] = useState(false);

	const {
		cartStatus,
    cartCount,
		closeCart,
		openCart,
		checkoutState,
		setCount,
    addDiscount,
	} = useShopify();

  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => {
    closeCart()
  });

	function handleOpen(e) {
		e.preventDefault();
		openCart()
	}

	function handleClose(e) {
		e.preventDefault();
		closeCart()
	}

	function openCheckout(e) {
		e.preventDefault();
    setLoading(true);
    addDiscount(checkoutState.id, discount).then(res => {
      setLoading(false);
      // window.open(checkoutState.webUrl) // opens checkout in a new window
      window.location.replace(checkoutState.webUrl) // opens checkout in same window
    })
	}

	useEffect(() => {
		const button = document.querySelector("button.App__view-cart");
		if (cartStatus === true) {
			button.classList.add("hide")
		} else {
			button.classList.remove("hide")
		}

		function getCount() {
			let lineItems =
				checkoutState.lineItems && checkoutState.lineItems.length > 0
					? checkoutState.lineItems
					: [];
			let count = 0;
			lineItems.forEach((item) => {
				count += item.quantity;
				return count
			});

			setCount(count)
		}

		getCount()
	}, [cartStatus, checkoutState]);

	return (
		<div ref={wrapperRef} id="cart">
			<div className={`Cart ${cartStatus ? "Cart--open" : ""}`}>
				<div className="App__view-cart-wrapper2">
					<button className="App__view-cart" onClick={(e) => handleOpen(e)}>
						{cartCount > 0 ? (
              <img src={cartFull} alt=""/>
            ) : (<img src={cartEmpty} alt=""/>)}
          </button>
				</div>
				<header className="Cart__header">
					<h2>Your cart</h2>
					<button className="Cart__close" onClick={(e) => handleClose(e)}>
            <img src={cartClose} alt=""/>
					</button>
				</header>
				<ul className="Cart__line-items">
					<LineItem />
				</ul>
        <div className="mb-1 code-wrap">
          <p>Coupon Code? Enter it here!</p>
          <input className="input" placeholder="Enter Code" type="text" value={discount} onChange={e => setDiscount(e.target.value)} />
        </div>
				<footer className="Cart__footer">
					<div className="Cart-info">
						<div className="Cart-info__total Cart-info__small">Subtotal</div>
						<div className="Cart-info__pricing">
							<span className="pricing">$ {checkoutState.subtotalPrice}</span>
						</div>
					</div>
					<div className="Cart-info">
						<div className="Cart-info__total Cart-info__small">Taxes</div>
						<div className="Cart-info__pricing">
							<span className="pricing">$ {checkoutState.totalTax}</span>
						</div>
					</div>
					<div className="Cart-info mb-1">
						<div className="Cart-info__total Cart-info__small">Total</div>
						<div className="Cart-info__pricing">
							<span className="pricing">$ {checkoutState.totalPrice}</span>
						</div>
					</div>

					<button
						className="button filled w-100"
						onClick={(e) => openCheckout(e)}
					>
            {loading ? <span className="loader" /> : 'Checkout'}
					</button>
				</footer>
			</div>
		</div>
	)
}
