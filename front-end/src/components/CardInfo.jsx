import React from 'react'
import Button from './useableComponents/Button'

const CardInfo = ({ fruitPrice, fruitName, fruitCarboidratos, fruitProteinas, fruitGorduras, fruitCalorias, fruitAcucar, updateCart }) => {
    return (
        <div className="cardInfo">
            <h3> {fruitName} </h3>
            <div className="cardNutritions">
              <p> Informações nutricionais: </p>
              <ul>
              <li> Carboidratos: {fruitCarboidratos} gramas</li>
              <li> Proteinas: {fruitProteinas} gramas </li>
              <li> Gorduras: {fruitGorduras} gramas </li>
              <li> Calorias: {fruitCalorias} gramas </li>
              <li> Açúcar: {fruitCalorias} gramas </li>
              </ul>
            </div>
            <p>$ {fruitPrice}</p>
            <Button addItem={updateCart} />
        </div>
    )
}

export default CardInfo