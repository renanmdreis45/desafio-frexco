import React from 'react'
import CartImg from '../../src/assets/cart.jpg'

const TotalPrice = ({ totalPrice, itemCount }) => {
    return (
        <div className="shoppingCartPrice">
            <h2>Total: ${totalPrice}</h2>
            <div
                className="allCartItems"
                style={{ background: `url("${CartImg}") no-repeat center/cover` }}>

                <div className="itemsAmountWrap">
                    <p>{itemCount}</p>
                </div>
            </div>
        </div>
    )
}

export default TotalPrice