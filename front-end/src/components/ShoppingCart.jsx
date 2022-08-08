import React from 'react'

const ShoppingCart = ({ cartItems, removeItem }) => {

    return (
        <div className="shoppingCart">
            {cartItems.map(item => (
                <div key={item.id} className="cardRow">
                    <div className="cardInfo">
                            <p className="quant">x{item.cartCount}</p>
                            <div>
                              <h3> {item.name} </h3>
                              <h5> Informação Nutricional: </h5>
                              <ul>
                                <li> Calorias: {item.calorias} Kcal</li>
                                <li> Carboidratos: {item.carboidratos} g</li>
                                <li> Proteinas: {item.proteinas} g </li>
                                <li> Gorduras: {item.gorduras} g </li>
                                <li> Açúcar: {item.calorias} g </li>
                              </ul>
                            </div>
                        <div className="cardPrice">
                            <p>${item.price}</p>
                        </div>
                        <i onClick={() => removeItem(item.id)} className="fas fa-times"></i>
                    </div>
                </div>

            ))}

        </div>
    )
}

export default ShoppingCart