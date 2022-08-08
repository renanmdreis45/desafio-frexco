import React, { useState } from 'react'
import CardContainer from '../components/CardContainer'
import Container from '../components/useableComponents/Container'
import ShoppingCartContainer from '../components/ShoppingCartContainer'
import Navbar from '../components/Navbar'


const Home = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [itemCount, setItemCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [hiddenMenu, setHiddenMenu] = useState(false)
    

    const updateCart = (fruitName, fruitPrice,fruitId, fruitCarboidratos, fruitProteinas, fruitGorduras, fruitCalorias, fruitAcucar) => {

        setItemCount(prevCount => prevCount + 1)
        setTotalPrice(prevPrice => prevPrice + fruitPrice)
        if (cartItems.find(item => item.name === fruitName)) {
            const result = cartItems.find((item) => item.name === fruitName)
            result.cartCount++
            return

        }

        setCartItems([
            ...cartItems,
            { 
                name: fruitName, 
                price: fruitPrice, 
                id: fruitId, 
                cartCount: 1 , 
                carboidratos: fruitCarboidratos, 
                proteinas: fruitProteinas, 
                gorduras: fruitGorduras,
                calorias: fruitCalorias,
                acucar: fruitAcucar,
            }

        ])
    }
    const removeItem = (id) => {
        const newItems = cartItems.filter((cartItems) => cartItems.id !== id)
        setCartItems(newItems)

        const itemCountResult = newItems.reduce(
            (acc, val) => (acc += val.cartCount), 0
        )
        setItemCount(itemCountResult)

        const priceResult = newItems.reduce(
            (acc, val) => (acc += val.price * val.cartCount), 0
        )
        setTotalPrice(priceResult)
    }
    return (
        <section className="hero">
            
            <Navbar itemCount={itemCount} hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu} />
            <Container>
                <CardContainer updateCart={updateCart} />
                <ShoppingCartContainer
                    hiddenMenu={hiddenMenu}
                    cartItems={cartItems}
                    totalPrice={totalPrice}
                    itemCount={itemCount}
                    removeItem={removeItem} />
            </Container>

        </section>
    )

}



export default Home