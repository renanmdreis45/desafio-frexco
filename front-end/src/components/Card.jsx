import React, { useState, useEffect } from 'react'
import CardInfo from './CardInfo'
import axios from "axios"


const url = 'http://localhost:8000/api/fruit/all';

const Card = ({updateCart}) => {
    const [fruits, setFruit] = useState([]);
  
    useEffect(() => {
      axios.get(url)
       .then(response => {
           setFruit(response.data)
       })
    }, []);

    return (
        <>
            {fruits.map((fruit) => (
                <div key={fruit.id} className="card">
                    <div className="fruitName">
                        <h5>{fruit.name}</h5>
                    </div>
                    <CardInfo
                        fruitPrice={fruit.id}
                        fruitCarboidratos={fruit.nutritions.carbohydrates}
                        fruitProteinas = {fruit.nutritions.protein}
                        fruitGorduras = {fruit.nutritions.fat}
                        fruitCalorias = {fruit.nutritions.calories}
                        fruitAcucar = {fruit.nutritions.sugar}
                        updateCart={() => updateCart(
                            fruit.name, 
                            fruit.id, 
                            fruit.nutritions.carbohydrates, 
                            fruit.nutritions.protein,
                            fruit.nutritions.fat,
                            fruit.nutritions.calories,
                            fruit.nutritions.sugar,
                            )} 
                    />
                </div>
            ))}
        </>
    )
}
export default Card